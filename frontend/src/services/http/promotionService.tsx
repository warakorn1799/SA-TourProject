import { PromotionInterface } from "../../interfaces/IPromotion";


const apiUrl = "http://localhost:80";

async function GetPromotion() {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  let res = await fetch(`${apiUrl}/promotions`, requestOptions)
    .then((response) => response.json())
    .then((res) => {
      if (res.data) {
        return res.data;
      } else {
        return false;
      }
    });

  return res;
}


async function DeletePromotionByID(id: Number | undefined) {
  const requestOptions = {
    method: "DELETE"
  };

  let res = await fetch(`${apiUrl}/promotions/${id}`, requestOptions)
    .then((response) => response.json())
    .then((res) => {
      if (res.data) {
        return res.data;
      } else {
        return false;
      }
    });

  return res;
}

async function GetPromotionById(id: Number | undefined) {
    const requestOptions = {
      method: "GET"
    };
  
    let res = await fetch(`${apiUrl}/promotion/${id}`, requestOptions)
      .then((response) => response.json())
      .then((res) => {
        if (res.data) {
          return res.data;
        } else {
          return false;
        }
      });
  
    return res;
  }

  async function CreatePromotion(data: PromotionInterface) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
  
    let res = await fetch(`${apiUrl}/promotions`, requestOptions)
      .then((response) => response.json())
      .then((res) => {
        if (res.data) {
          return { status: true, message: res.data };
        } else {
          return { status: false, message: res.error };
        }
      });
  
    return res;
  }
  
  async function UpdatePromotion(data: PromotionInterface) {
    const requestOptions = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
  
    let res = await fetch(`${apiUrl}/promotions`, requestOptions)
      .then((response) => response.json())
      .then((res) => {
        if (res.data) {
          return { status: true, message: res.data };
        } else {
          return { status: false, message: res.error };
        }
      });
  
    return res;
  }

export{
  GetPromotion,
  GetPromotionById,
  DeletePromotionByID,
  CreatePromotion,
  UpdatePromotion
};