// 追加ボタンが押された時の処理
const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // li生成
  const li = document.createElement("li");
  li.className = "incomplete-area__li";

  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // p生成
  const p = document.createElement("p");
  p.className = "todo-item";
  p.innerText = inputText;

  // btn(完了)生成
  const completeBtn = document.createElement("button");
  completeBtn.className = "btn btn__complete";
  completeBtn.innerText = "完了";
  completeBtn.addEventListener("click", () => {
    alert("完了");
  });

  // btn(削除)生成
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn__delete";
  deleteBtn.innerText = "削除";

  // 削除ボタンが押された時の処理
  deleteBtn.addEventListener("click", () => {
    const deleteTarget = deleteBtn.closest("li");
    document.querySelector(".incomplete-area__ul").removeChild(deleteTarget);
  });

  // 親子関係を設定
  div.appendChild(p);
  div.appendChild(completeBtn);
  div.appendChild(deleteBtn);
  li.appendChild(div);

  // 未完了リストに追加
  document.querySelector(".incomplete-area__ul").appendChild(li);
};

document.getElementById("add-button").addEventListener("click", onClickAdd);
