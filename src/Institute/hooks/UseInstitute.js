import React from "react";
import { useImmer } from "use-immer";
import { getInstitutes, createInstitutes, deteleInstitutes } from "../Api/Api";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { successMessage,successDeletedMessage } from "../tostify/Tostify";
export const UseInstitute = () => {
  const [isConfirmDelete, setIsConfirmDelete] = useImmer(false);

  const [institute, setInstitute] = useImmer({
    instituteId: 0,
    name: "",
  });
  console.log("institute", institute);

  const GET_INSTITUTES = "GET_INSTITUTES";
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const Institutes = useQuery(GET_INSTITUTES, getInstitutes, {
    staleTime: Infinity,
  });

  const createInstitute = useMutation(createInstitutes, {
    onError: () => {
      console.log("error finded");
    },
    onSuccess: () => {
      successMessage();
      queryClient.invalidateQueries(GET_INSTITUTES);
      navigate(-1);
    },
  });
  // part of  deleteInstitute
  const deleteInstitute = useMutation(deteleInstitutes, {
    onError: () => {
      console.log("error finded");
    },
    onSuccess: () => {
      queryClient.invalidateQueries(GET_INSTITUTES);
      successDeletedMessage()

    },
    onSettled: () => {
      onToggleModal(false);
    },
  });
  const onToggleModal = React.useCallback(
    (isOpen) => {
      setIsConfirmDelete((draft) => {
        draft = isOpen;
        return draft;
      });
    },
    [setIsConfirmDelete]
  );

  const onConfirm = () => {
    deleteInstitute.mutate(institute.instituteId);
  };
  // {end  !}
  const onDelete = (id) => {
    console.log("onDelete Id", id);
    const selectedInstitute = Institutes.data.find((c) => c.instituteId === id);
    console.log("This is selectedInstitute ", selectedInstitute);
    if (selectedInstitute) {
      setInstitute(selectedInstitute);
    }
    setIsConfirmDelete((draft) => {
      draft = true;
      return draft;
    });
  };
  return {
    Institutes,
    institute,
    setInstitute,
    createInstitute,
    isConfirmDelete,
    setIsConfirmDelete,
    onDelete,
    deleteInstitute,
    onConfirm,
    onToggleModal,
  };
};
