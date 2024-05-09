import { IAddConfirmation } from "@/interfaces/components";
import { fetchAddList } from "@/libs/service";
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

const AddConfirmation = ({ payload }: IAddConfirmation) => {
  const { hideModal } = useModal();
  const queryClient = useQueryClient();
  const router = useRouter();

  const { mutate, isPending } = useMutation({
    mutationFn: (): Promise<{ status: number }> => fetchAddList([payload]),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["commodities"],
      });

      hideModal();
      toast(
        <ToastComponent
          variant="success"
          message="Berhasil menambahkan data komoditas baru!"
        />,
      );
      router.push("/");
    },

    onError: () => {
      toast(
        <ToastComponent
          variant="error"
          message="Gagal menambahkan data komoditas baru"
        />,
      );
      hideModal();
    },
  });

  return (
    <div className={`${style.confirmation_container} ${style.bg_secondary}`}>
      <div className={style.confirmation_header}>
        <h3>Tambah Komoditas</h3>
        <RiCloseLine onClick={hideModal} />
      </div>
      <div>
        <p>
          Periksa kembali data yang telah anda isi sudah tidak memiliki
          kesalahan atau typo
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

export default AddConfirmation;
