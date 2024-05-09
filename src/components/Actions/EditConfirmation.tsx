import { IEditConfirmation } from "@/interfaces/components";
import { fetchEditList } from "@/libs/service";
import { useModal } from "@/store/useModal";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { RiCloseLine } from "react-icons/ri";
import Button from "../ui/button";
import { useRouter } from "next/router";
import style from "./Confirmation.module.scss";

const EditConfirmation = ({ payload }: IEditConfirmation) => {
  const { hideModal } = useModal();
  const queryClient = useQueryClient();
  const router = useRouter();
  console.log(payload);

  const { mutate } = useMutation({
    mutationFn: (): Promise<{ status: number }> => fetchEditList([payload]),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["commodities"],
      });

      hideModal();
      router.push("/");
    },

    onError: (error) => {
      console.log(error);

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
        <Button variant="destructive" onClick={hideModal}>
          Batalkan
        </Button>
        <Button onClick={() => mutate()}>Lanjutkan</Button>
      </div>
    </div>
  );
};

export default EditConfirmation;
