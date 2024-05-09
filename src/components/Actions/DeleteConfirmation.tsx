import { IDeleteConfirmation } from "@/interfaces/components";
import { fetchRemoveList } from "@/libs/service";
import { useModal } from "@/store/useModal";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { RiCloseLine } from "react-icons/ri";
import Button from "../ui/button";
import { useRouter } from "next/router";
import style from "./Confirmation.module.scss";
import Ellipsis from "../ui/ellipsis";
import ToastComponent from "../ui/toast-component";
import toast from "react-simple-toasts";

const DeleteConfirmation = ({ payload }: IDeleteConfirmation) => {
  const { hideModal } = useModal();
  const queryClient = useQueryClient();
  const router = useRouter();

  const { mutate, isPending } = useMutation({
    mutationFn: (): Promise<{ status: number }> => fetchRemoveList([payload]),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["commodities"],
      });

      hideModal();
      toast(
        <ToastComponent
          variant="success"
          message="Berhasil menghapus data komoditas!"
        />,
      );
      router.push("/");
    },

    onError: () => {
      toast(
        <ToastComponent
          variant="error"
          message="Gagal menghapus data komoditas"
        />,
      );
      hideModal();
    },
  });

  return (
    <div className={`${style.confirmation_container} ${style.bg_secondary}`}>
      <div className={style.confirmation_header}>
        <h3 style={{ color: "red" }}>Hapus Komoditas</h3>
        <RiCloseLine onClick={hideModal} />
      </div>
      <div>
        <p>
          Apakah anda yakin ingin menghapus komoditas ini?{" "}
          <span style={{ fontWeight: "600" }}>
            {payload.komoditas} - {payload.area_provinsi}
          </span>
        </p>
      </div>
      <div className={style.confirmation_buttons_box}>
        {isPending ? (
          <Ellipsis />
        ) : (
          <>
            <Button
              variant="destructive"
              onClick={hideModal}
              disabled={isPending}
            >
              Batalkan
            </Button>
            <Button onClick={() => mutate()} disabled={isPending}>
              Lanjutkan
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default DeleteConfirmation;
