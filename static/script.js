document.getElementById('file-input').addEventListener('change', function () {
    document.getElementById('upload-form').submit();
});

function adjustPokemonSuggestions() {
    for (var i = 1; i <= 6; i++) {
        var pokemonId = 'pokemon' + i;
        var suggestionsId = 'pokemon' + i + 'suggestions';
        var pokemon = document.getElementById(pokemonId);
        var suggestions = document.getElementById(suggestionsId);
        suggestions.style.width = getComputedStyle(pokemon).width;
        var rect = pokemon.getBoundingClientRect();
        suggestions.style.left = rect.left + 'px';
    }
}
window.addEventListener('DOMContentLoaded', adjustPokemonSuggestions);
window.addEventListener('resize', adjustPokemonSuggestions);

window.addEventListener('DOMContentLoaded', function () {
    var season = document.getElementById('season');
    var rank = document.getElementById('rank');
    var seasonWidth = getComputedStyle(season).width;
    var rankWidth = (parseFloat(seasonWidth) - 7.7) + 'px';
    rank.style.width = rankWidth;
    var rect = season.getBoundingClientRect();
    rank.style.left = rect.left + 'px';
});

function adjustTitleWidth() {
    var titleElement = document.getElementById('title');
    var nameElement = document.getElementById('url');
    titleElement.style.width = nameElement.offsetWidth - 6 + 'px';
}
window.onload = adjustTitleWidth;
document.addEventListener('DOMContentLoaded', adjustTitleWidth);
window.addEventListener('resize', adjustTitleWidth);

function getTitleFromUrl() {
    var urlInput = document.getElementById('url');
    var url = urlInput.value;
    fetch(url)
        .then(response => response.text())
        .then(html => {
            var tempDiv = document.createElement('div');
            tempDiv.innerHTML = html;
            var title = tempDiv.querySelector('title');
            if (title) {
                document.getElementById('title').value = title.innerText;
            } else {
                alert("Title not found on the page");
            }
        })
        .catch(error => {
            console.error('Error fetching the URL:', error);
            alert("Error fetching the URL");
        });
}

$(function () {
    $('.check').on('click', function () {
        if ($(this).prop('checked')) {
            $('.check').prop('checked', false);
            $(this).prop('checked', true);
        }
    });
});

$(function () {
    $("input").on("keydown", function (ev) {
        if ((ev.which && ev.which === 13) || (ev.keyCode && ev.keyCode === 13)) {
            return false;
        } else {
            return true;
        }
    });
});

$(function () {
    $("select").focus(function () {
        $(this).on("keydown", function (ev) {
            if ((ev.which && ev.which === 13) || (ev.keyCode && ev.keyCode === 13)) {
                return false;
            } else {
                return true;
            }
        });
    });
});

$(document).ready(function () {
    $("form").submit(function (event) {
        // シングルまたはダブルのどちらかが選択されているかを確認
        if (!$(".check:checked").length) {
            alert("ルールを選択してください。");
            event.preventDefault(); // フォーム送信を阻止
        }
    });
});


$(document).ready(function () {
    $("form").submit(function (event) {

        var urlInput = $("#season");
        if (urlInput.val() === "") {
            alert("シーズンを選択してください。");
            event.preventDefault();
        }

        var urlInput = $("#url");
        if (urlInput.val() === "") {
            alert("URLを入力してください。");
            event.preventDefault();
        }

        var urlInput = $("#name");
        if (urlInput.val() === "") {
            alert("制作者名を入力してください。");
            event.preventDefault();
        }

        var urlInput = $("#rank");
        var inputValue = urlInput.val();
        if (inputValue.trim() === "") {
            alert("最終順位を入力してください。");
            event.preventDefault();
        } else {
            var nonNumericPattern = /[^0-9]/;
            if (nonNumericPattern.test(inputValue)) {
                alert("順位は数字のみを入力してください。");
                event.preventDefault();
            }
        }


        if (document.querySelector('.red-background')) {
            event.preventDefault();
            alert('フォルムを選択してください。');
        }
    });
});
