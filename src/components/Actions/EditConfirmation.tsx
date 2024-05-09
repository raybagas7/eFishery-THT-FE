import { IEditConfirmation } from "@/interfaces/components";
import { fetchEditList } from "@/libs/service";
import { useModal } from "@/store/useModal";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { RiCloseLine } from "react-icons/ri";
import Button from "../ui/button";
import { useRouter } from "next/router";
import style from "./Confirmation.module.scss";
import Ellipsis from "../ui/ellipsis";
import toast from "react-simple-toasts";
import ToastComponent from "../ui/toast-component";

const EditConfirmation = ({ payload }: IEditConfirmation) => {
  const { hideModal } = useModal();
  const queryClient = useQueryClient();
  const router = useRouter();

  const { mutate, isPending } = useMutation({
    mutationFn: (): Promise<{ status: number }> => fetchEditList([payload]),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["commodities"],
      });

      hideModal();
      toast(
        <ToastComponent
          variant="success"
          message="Berhasil menyunting data komoditas!"
        />,
      );
      router.push("/");
    },

    onError: () => {
      hideModal();
      toast(
        <ToastComponent
          variant="error"
          message="Gagal menyunting data komoditas"
        />,
      );
      hideModal();
    },
  });

  return (
    <div className={`${style.confirmation_container} ${style.bg_secondary}`}>
      <div className={style.confirmation_header}>
        <h3>Edit Komoditas</h3>
        <RiCloseLine onClick={hideModal} />
      </div>
      <div>
        <p>
          {`Yakin kah kamu akan mengubah data untuk komoditas `}
          <span>{payload.komoditas}</span> {"ini ?"}
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

export default EditConfirmation;
