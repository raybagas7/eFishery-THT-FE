import { IAddConfirmation } from "@/interfaces/components";
import { fetchAddList } from "@/libs/service";
import { useModal } from "@/store/useModal";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { RiCloseLine } from "react-icons/ri";
import Button from "../ui/button";
import { useRouter } from "next/router";
import style from "./Confirmation.module.scss";

const AddConfirmation = ({ payload }: IAddConfirmation) => {
  const { hideModal } = useModal();
  const queryClient = useQueryClient();
  const router = useRouter();

  const { mutate } = useMutation({
    mutationFn: (): Promise<{ status: number }> => fetchAddList([payload]),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["commodities"],
      });

      hideModal();
      router.push("/");
    },

    onError: () => {
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
        <Button variant="destructive" onClick={hideModal}>
          Batalkan
        </Button>
        <Button onClick={() => mutate()}>Lanjutkan</Button>
      </div>
    </div>
  );
};

export default AddConfirmation;
