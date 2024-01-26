//ファイルをアップロード
document.getElementById('file-input').addEventListener('click', function () {
    this.value = '';
});
document.getElementById('file-input').addEventListener('change', function () {
    document.getElementById('upload-form').submit();
    showLoading();
});
function showLoading() {
    document.getElementById('overlay').style.display = 'flex';
    document.getElementById('loading-overlay').style.display = 'flex';
}

var seasonSelect = document.getElementById("season");
var rankingInput = document.getElementById("ranking");

function updateRankingStatus() {
    if (seasonSelect.value !== "") {
        rankingInput.disabled = false;
        rankingInput.classList.remove("disabled");
    } else {
        rankingInput.disabled = true;
        rankingInput.value = "";
        rankingInput.classList.add("disabled");
    }
}
updateRankingStatus();
seasonSelect.addEventListener("change", updateRankingStatus);

document.addEventListener("DOMContentLoaded", function () {
    var seasonSelect = document.getElementById("season");
    var regulationSelect = document.getElementById("regulation");
    var eventSelect = document.getElementById("event");
    seasonSelect.addEventListener("change", function () {
        eventSelect.selectedIndex = 0;
        updateRankingStatus();
    });
    regulationSelect.addEventListener("change", function () {
        eventSelect.selectedIndex = 0;
        updateRankingStatus();
    });
    eventSelect.addEventListener("change", function () {
        seasonSelect.selectedIndex = 0;
        regulationSelect.selectedIndex = 0;
        updateRankingStatus();
    });
});

document.getElementById('season').addEventListener('change', function () {
    var seasonValue = this.value;
    var regulationElement = document.getElementById('regulation');
    var seasonMap = {
        'season1': 'A', 'season2': 'A',
        'season3': 'B', 'season4': 'B',
        'season5': 'C', 'season6': 'C', 'season7': 'C',
        'season8': 'D', 'season9': 'D', 'season10': 'D',
        'season11': 'E', 'season12': 'E', 'season13': 'E',
        'season14': 'F'
    };
    if (seasonValue != '') {
        regulationElement.value = seasonMap[seasonValue] || '';
    }
});

document.getElementById('regulation').addEventListener('change', function () {
    var regulationValue = this.value;
    var seasonElement = document.getElementById('season');
    var seasonMap = {
        'A': ['season1', 'season2'],
        'B': ['season3', 'season4'],
        'C': ['season5', 'season6', 'season7'],
        'D': ['season8', 'season9', 'season10'],
        'E': ['season11', 'season12', 'season13'],
        'F': ['season14']
    };
    if (seasonMap[regulationValue] && seasonMap[regulationValue].indexOf(seasonElement.value) === -1) {
        seasonElement.value = "";
    }
});

document.getElementById('generateButton').addEventListener('click', function () {
    event.preventDefault();
    let url = document.getElementById('url').value;

    if (!url) {
        document.getElementById('title').value = "";
        return;
    }

    fetch(url)
        .then(response => response.text())
        .then(html => {
            let matches = html.match(/<title>(.*?)<\/title>/i);
            let title = matches && matches[1] ? matches[1] : 'タイトルなし';
            if (url.includes('hatenablog.com')) {
                title = title.replace(/\s*-\s*[^-]*$/, '');
            }
            document.getElementById('title').value = title;
        })
        .catch(error => {
            if (url.includes('note.com')) {
                alert("noteのURLからは生成できません。コピペで貼り付けてください。");
            } else if (url.includes('youtube.com')) {
                alert("YouTubeのURLからは生成できません。コピペで貼り付けてください。");
            } else {
                alert("このURLからは生成できません。");
            }
        });
});
document.getElementById('formatButton').addEventListener('click', function () {
    event.preventDefault();

    let title;
    rule = document.getElementById('rule').value;
    if (rule == "single") {
        rule = "シングル";
    } else if (rule == "double") {
        rule = "ダブル";
    }

    let season = document.getElementById('season').value;
    if (season != "") {
        season = "シーズン" + season.replace("season", "");
    }

    let ranking = document.getElementById('ranking').value;
    if (ranking != "") {
        ranking = "最終" + ranking + "位";
    }

    title = "【ポケモンSV" + rule + "】" + season + ranking;
    document.getElementById('title').value = title;
});

//半角数字しか入力させない
document.addEventListener('DOMContentLoaded', function () {
    var rankInput = document.getElementById('ranking');
    rankInput.addEventListener('input', function (event) {
        var inputValue = event.target.value;
        var convertedValue = inputValue.replace(/[０-９]/g, function (s) {
            return String.fromCharCode(s.charCodeAt(0) - 0xfee0);
        });
        rankInput.value = convertedValue;
    });
});

//フォルム候補の横幅を変える
function setPokemonWidth() {
    for (var i = 1; i <= 6; i++) {
        var pokemonId = 'pokemon' + i;
        var suggestionsId = pokemonId + 'suggestions';

        var pokemonWidth = document.getElementById(pokemonId).offsetWidth;
        var newPokemonWidth = pokemonWidth + 1;
        document.getElementById(suggestionsId).style.width = newPokemonWidth + 'px';
    }
}
window.addEventListener('load', setPokemonWidth);
window.addEventListener('resize', setPokemonWidth);

//エンターで送信させない
$(function () {
    $("#party_form").on("keydown", function (ev) {
        if ((ev.which && ev.which === 13) || (ev.keyCode && ev.keyCode === 13)) {
            return false;
        } else {
            return true;
        }
    });
});

//必須項目が空だと警告を出す
$(document).ready(function () {
    $("#party_form").submit(function (event) {

        var flags = {
            rule: false,
            season: false,
            url: false,
            name: false,
            ranking: false,
            red: false
        };

        var urlInput = $("#rule");
        if (urlInput.val() === "") {
            alert("ルールを選択してください。");
            event.preventDefault();
        } else {
            flags.rule = true;
        }

        var urlInput = $("#regulation");
        var urlInput2 = $("#event");
        if ((urlInput.val() === "") && (urlInput2.val() === "")) {
            alert("レギュレーションもしくは大会などを選択してください。");
            event.preventDefault();
        } else {
            flags.season = true;
        }

        var urlInput = $("#url");
        if (urlInput.val() === "") {
            alert("URLを入力してください。");
            event.preventDefault();
        } else {
            flags.url = true;
        }

        var urlInput = $("#name");
        if (urlInput.val() === "") {
            alert("制作者名を入力してください。");
            event.preventDefault();
        } else {
            flags.name = true;
        }

        var urlInput = $("#ranking");
        var urlInput2 = $("#season");
        var inputValue = urlInput.val();
        if ((urlInput2.val() != "") && (inputValue.trim() === "")) {
            alert("最終順位を入力してください。");
            event.preventDefault();
        } else {
            var nonNumericPattern = /[^0-9]/;
            if (nonNumericPattern.test(inputValue)) {
                alert("順位は数字のみを入力してください。");
                event.preventDefault();
            } else {
                flags.ranking = true;
            }
        }

        if (document.querySelector('.red-background')) {
            event.preventDefault();
            alert('フォルムを選択してください。');
        } else {
            flags.red = true;
        }

        if (flags.rule && flags.season && flags.url && flags.name && flags.ranking && flags.red) {
            var confirmed = confirm("入力した内容で送信しますか？");
            if (!confirmed) {
                event.preventDefault();
            }
        }
    });
});
