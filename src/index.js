import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromImcompleteList = (target) => {
  document.getElementById("list-a").removeChild(target);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  // div生成
  const div = document.createElement("div");
  div.className = "row";
  const li = document.createElement("li");
  const p_tag = document.createElement("p");
  p_tag.innerText = text;
  li.appendChild(p_tag);

  // 完了ボタン生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";

  completeButton.addEventListener("click", () => {
    // 押された完了ボタンの親タグ(li)を未完了リストから削除
    deleteFromImcompleteList(completeButton.parentNode);
    //完了要素に追加するリスト
    const addTarget = completeButton.parentNode;

    // todo内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    // li以下を初期化
    addTarget.textContent = null;

    // pタグ生成
    const p_elem = document.createElement("p");
    p_elem.innerText = text;

    // 戻すボタン生成
    const backBtn = document.createElement("button");
    backBtn.innerText = "戻す";

    addTarget.appendChild(p_elem);
    addTarget.appendChild(backBtn);
    // console.log(addTarget);

    // 完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);

    // 戻すボタンを押すと未完了に追加
    backBtn.addEventListener("click", () => {
      const deleteTarget = backBtn.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);
      // テキスト取得
      const i = deleteTarget.firstElementChild.textContent;
      createIncompleteList(i);
    });
  });

  //  削除ボタン生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";

  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(li)を未完了リストから削除
    deleteFromImcompleteList(deleteButton.parentNode);
  });

  // ulタグの子要素に各要素を追加
  const ul_a = document.getElementById("list-a");
  ul_a.appendChild(li);
  li.appendChild(completeButton);
  li.appendChild(deleteButton);
};

document.getElementById("add-btn").addEventListener("click", () => {
  onClickAdd();
});
