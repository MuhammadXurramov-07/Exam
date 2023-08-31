import React, { useState } from "react";
import "./SinglePage.scss";
import { useNavigate, useParams } from "react-router-dom";

export function SinglePage({ data }) {
  let navigat = useNavigate();
  let { id } = useParams();
  let datas = data.find((i) => i.id == id) || [{}];

  let [nameValue, setNameValue] = useState("");
  let [numberValue, setNumberValue] = useState("");

  function inputFunc1(e) {
    setNameValue(e);
  }
  function inputFunc2(e) {
    setNumberValue(e);
  }
  let massage = `Tanlangan mahsulot id: ${id} ✅ %0A Username: ${nameValue} ✅ %0A Tel Number: ${numberValue} ✅`;
  let bot = {
    TOKEN: "6563681818:AAHzxZCkyGJSney_Z-steEp4SrIwNMh7oB8",
    chatId: "-1001971992500",
    message: massage,
  };
  function Send(e) {
    e.preventDefault();
    if (nameValue != "" && numberValue != "") {
      fetch(
        `https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatId}&text=${bot.message}`,
        {
          method: "GET",
        }
      ).then(
        (succes) => {
          alert("Xabar muvaffaqiyatli jo`natildi ✅️");
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      alert(
        "Xabar yubborilmadi ❌. Ma`lumotlarni to`liq to`ldirib❗ Qytadan urinib ko`ring 😔"
      );
    }

    let myInt = document.querySelector(".myInt");
    let myInt2 = document.querySelector(".myInt2");
    myInt.value = null;
    myInt2.value = null;
  }
  return (
    <>
      <div className="single">
        <button className="back" onClick={() => navigat("/")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-arrow-left-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
          </svg>
        </button>
        <img src={datas.image} alt="" />
        <div className="content">
          <h1>{datas.title}</h1>
          <p>{datas.description}</p>
          <span>{datas.price} $</span>
          <h2>Mahsulotni sotib olishni istaysizmi ?</h2>
          <form action="" onSubmit={Send}>
            <input
              className="myInt"
              onChange={(e) => inputFunc1(e.target.value)}
              type="text"
              placeholder="Ism va familiyangizni kiriting"
            />
            <input
              className="myInt2"
              onChange={(e) => inputFunc2(e.target.value)}
              type="number"
              placeholder="Telefon raqamingizni kiriting"
            />
            <button>Yuborish</button>
          </form>
        </div>
      </div>
    </>
  );
}
