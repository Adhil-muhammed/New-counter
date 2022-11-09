
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export const successMessage = async (text) => {
    if (text === null || text === undefined || text === "") text = "Data saved successfully!";
    Toastify({
      text: text,
      duration: 3000,
      close: true,
      gravity: "top",
      position: "right",
      backgroundColor: "#4fbe87",
    }).showToast();
  };
  
  export const successDeletedMessage = async (text) => {
    successMessage("Data deleted successfully!");
  };
  


