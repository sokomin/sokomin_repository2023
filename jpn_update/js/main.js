var selectElement = document.getElementById('numberSelect');
var csvOutputElement = document.getElementById('csvOutput');

function fetchCSVAndOutput() {
    var selectedValue = selectElement.value;
    var csvUrl = "https://sokomin.github.io/sokomin_repository2023/jpn_update/update_" + selectedValue + ".csv";

    fetch(csvUrl)
        .then(response => response.text())
        .then(data => {
            // <h1>404</h1>が含まれていた場合取得しない
            if (data.includes('<h1>404</h1>')) {
              csvOutputElement.innerText = '取得エラー';
          } else {
              csvOutputElement.innerText = data;
          }
        })
        .catch(error => console.error('Error:', error));
}

// バージョンアップしたらここ書き換える
CURRENT_VER=867

for (var i = CURRENT_VER; i >= 746; i--) {
    var value = (i - CURRENT_VER) / 10000 + CURRENT_VER / 10000;
    value = value.toFixed(4); // 小数点以下4桁にする

    var option = document.createElement('option');
    option.id = i;
    option.value = value;
    option.text = value;

    selectElement.appendChild(option);
}

// 初期表示時には最初のCSVを読み込む
fetchCSVAndOutput();

// 選択が変更されたときにCSVを読み込む
selectElement.addEventListener('change', fetchCSVAndOutput);
// fetch('https://sokomin.github.io/sokomin_repository2023/jpn_update/update_0.0728.csv')
//   .then(response => response.text())
//   .then(data => {
//     document.getElementById('content').innerText = data;
//   })
//   .catch(error => console.error('Error:', error));

