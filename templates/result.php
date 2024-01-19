<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>構築まとめ屋。</title>
    <link rel="stylesheet" type="text/css" href="{{ url_for('static', filename='css/destyle.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ url_for('static', filename='css/header.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ url_for('static', filename='css/style.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ url_for('static', filename='css/animation.css') }}">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/base/jquery-ui.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
    <script src="{{ url_for('static', filename='js/autocomplete_poke.js') }}"></script>
    <script src="{{ url_for('static', filename='js/autocomplete_item.js') }}"></script>
    <script src="{{ url_for('static', filename='js/autocomplete_tera.js') }}"></script>
    <style>
        .ui-menu .ui-menu-item-wrapper {
            position: relative;
            padding: 8px 1em 8px .4em;
        }
    </style>
</head>

<body>
    <div id="overlay"></div>
    <svg id="loading-overlay" class="spinner" width="65px" height="65px" viewBox="0 0 66 66"
        xmlns="http://www.w3.org/2000/svg" style="display: none;">
        <circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
    </svg>
    <div class="overlay"></div>
    <div id="top">
        <header>
            <a href="https://matomeyapoke.com/">
                <img src="{{ url_for('static', filename='img/flat.png') }}" id="header-img">
            </a>
            <button id="menuButton"><i class="fas fa-bars"></i></button>
        </header>
    </div>
    <div id="hamburgerMenu">
        <span id="closeButton">×</span>
        <form action="https://matomeyapoke.com/search.php" method="get">
            <div class="rule-container" style="margin-left: 16px;">
                <input type='checkbox' name='rule[]' value='single' id='single' style='margin-bottom: 4px;'>
                <label for='single' style='margin-bottom: 2px; margin-left: 2px;'>シングル</label>
                <input type='checkbox' name='rule[]' value='double' id='double'
                    style='margin-bottom: 4px; margin-left: 16px;'>
                <label for='double' style='margin-bottom: 2px; margin-left: 2px;'>ダブル</label>
            </div>
            <div id="search-bar">
                <input type="search" id="search-input" class="pokemon_input" name="pokemon0" autocomplete="off"
                    placeholder="ポケモン名で検索">
                <button type="submit" id="search-icon">
                    <i class="fas fa-search fa-fw"></i>
                </button>
            </div>
        </form>
        <div class="menu-box">
            <h3>記事検索</h3>
            <ul>
                <li>
                    <a href="https://matomeyapoke.com/search.php">
                        <span class="chevron-right">
                            <i class="fas fa-chevron-right"></i>
                        </span>
                        <span>詳細検索はこちら</span>
                    </a>
                </li>
            </ul>
        </div>
        <div class="menu-box">
            <h3>構築投稿フォーム</h3>
            <ul>
                <li>
                    <a href="#">
                        <span class="chevron-right">
                            <i class="fas fa-chevron-right"></i>
                        </span>
                        <span>ランクバトルの構築を投稿</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="menu-item">
                        <span class="chevron-right">
                            <i class="fas fa-chevron-right"></i>
                        </span>
                        <span>その他の構築を投稿</span>
                    </a>
                </li>
            </ul>
        </div>
        <div class="menu-box">
            <h3>シングル記事</h3>
            <ul>
                <li>
                    <a href="#">
                        <span class="chevron-right">
                            <i class="fas fa-chevron-right"></i>
                        </span>
                        <span>SVシーズン13シングル上位記事</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="chevron-right">
                            <i class="fas fa-chevron-right"></i>
                        </span>
                        <span>SVシーズン12シングル上位記事</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="chevron-right">
                            <i class="fas fa-chevron-right"></i>
                        </span>
                        <span>SVシーズン11シングル上位記事</span>
                    </a>
                </li>
            </ul>
        </div>
        <div class="menu-box">
            <h3>ダブル記事</h3>
            <ul>
                <li>
                    <a href="#">
                        <span class="chevron-right">
                            <i class="fas fa-chevron-right"></i>
                        </span>
                        <span>SVシーズン13ダブル上位記事</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="chevron-right">
                            <i class="fas fa-chevron-right"></i>
                        </span>
                        <span>SVシーズン12ダブル上位記事</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="chevron-right">
                            <i class="fas fa-chevron-right"></i>
                        </span>
                        <span>SVシーズン11ダブル上位記事</span>
                    </a>
                </li>
            </ul>
        </div>
        <div class="menu-box">
            <h3>問い合わせ</h3>
            <ul>
                <li>
                    <a href="inquiry.php">
                        <span class="chevron-right">
                            <i class="fas fa-chevron-right"></i>
                        </span>
                        <span>こちらから</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>

    <div class="content">
        <div>このページでは各シーズンの構築記事を投稿できます。シーズン途中の構築やランクバトル以外の構築はその他のフォームから投稿してください。</div>
        <div>レンタル画像からポケモン名などを自動で読み取れます。こちらを利用して可能な限り多くの項目に入力していただけると助かります。</div>

        <div>
            <form method="post" enctype="multipart/form-data" id="upload-form">
                <input type="file" name="file" id="file-input" accept=".png, .jpg, .jpeg">
            </form>
        </div>

        <form id="party_form" action="https://matomeyapoke.com/save_to_database.php" method="post">

            <input type="text" id="approval" name="approval" style="display: none;" value="false">

            <div>
                <span>*は必須項目です。</span>
            </div>

            <div>
                <label for="rule">ルール<span>*</span></label>
                <select name="rule" id="rule">
                    <option value="">-----</option>
                    <option value="single">シングル</option>
                    <option value="double">ダブル</option>
                </select>
            </div>

            <div>
                <label for="season">シーズン<span>*</span></label>
                <select name="season" id="season">
                    <option value="">-----</option>
                    <script src="{{ url_for('static', filename='js/season.js') }}"></script>
                </select>
            </div>

            <div>
                <label for="url">記事URL<span>*</span></label>
                <input type="search" id="url" name="url" autocomplete="off">
            </div>

            <div>
                <label for="name">制作者名<span>*</span><span id="name_x"></span></label>
                <input type="search" id="name" name="name" autocomplete="off">
            </div>

            <div>
                <label for="ranking">最終順位<span>*</span></label><br>
                <input type="search" id="ranking" name="rank" autocomplete="off">
                <label for="ranking">位</label>
            </div>

            <div>
                <img src="data:image/jpeg;base64,{{ img_base64 }}" alt="アップロードされた画像">
            </div>

            <label for="pokemon1">ポケモン１</label>
            <div class="input-group">
                <input type="search" class="poke_input pokemon_input" id="pokemon1" name="pokemon1" autocomplete="off"
                    placeholder="ポケモン名" value="{{ closest_words[0] }}" oninput="changeColor('pokemon1')"
                    onfocus="showPokemonSuggestions('pokemon1')" onblur="myBlurFunction('pokemon1')">
                <div id="pokemon1suggestions" class="suggestions" style="display:none;"></div>
                <input type="search" class="tool_input item_input" id="item1" name="item1" autocomplete="off"
                    placeholder="もちもの" value="{{ closest_words[1] }}" oninput="changeColor('item1')">
                <input type="search" class="teras_input tera_input" id="tera1" name="tera1" autocomplete="off"
                    placeholder="テラスタル" value="{{ message1 }}">
            </div>

            <label for="pokemon2">ポケモン２</label>
            <div class="input-group">
                <input type="search" class="poke_input pokemon_input" id="pokemon2" name="pokemon2" autocomplete="off"
                    value="{{ closest_words[2] }}" oninput="changeColor('pokemon2')"
                    onfocus="showPokemonSuggestions('pokemon2')" onblur="myBlurFunction('pokemon2')">
                <div id="pokemon2suggestions" class="suggestions" style="display:none;"></div>
                <input type="search" class="tool_input item_input" id="item2" name="item2" autocomplete="off"
                    value="{{ closest_words[3] }}" oninput="changeColor('item2')">
                <input type="search" class="teras_input tera_input" id="tera2" name="tera2" autocomplete="off"
                    value="{{ message2 }}">
            </div>

            <label for="pokemon3">ポケモン３</label>
            <div class="input-group">
                <input type="search" class="poke_input pokemon_input" id="pokemon3" name="pokemon3" autocomplete="off"
                    value="{{ closest_words[4] }}" oninput="changeColor('pokemon3')"
                    onfocus="showPokemonSuggestions('pokemon3')" onblur="myBlurFunction('pokemon3')">
                <div id="pokemon3suggestions" class="suggestions" style="display:none;"></div>
                <input type="search" class="tool_input item_input" id="item3" name="item3" autocomplete="off"
                    value="{{ closest_words[5] }}" oninput="changeColor('item3')">
                <input type="search" class="teras_input tera_input" id="tera3" name="tera3" autocomplete="off"
                    value="{{ message3 }}">
            </div>

            <label for="pokemon4">ポケモン４</label>
            <div class="input-group">
                <input type="search" class="poke_input pokemon_input" id="pokemon4" name="pokemon4" autocomplete="off"
                    value="{{ closest_words[6] }}" oninput="changeColor('pokemon4')"
                    onfocus="showPokemonSuggestions('pokemon4')" onblur="myBlurFunction('pokemon4')">
                <div id="pokemon4suggestions" class="suggestions" style="display:none;"></div>
                <input type="search" class="tool_input item_input" id="item4" name="item4" autocomplete="off"
                    value="{{ closest_words[7] }}" oninput="changeColor('item4')">
                <input type="search" class="teras_input tera_input" id="tera4" name="tera4" autocomplete="off"
                    value="{{ message4 }}">
            </div>

            <label for="pokemon5">ポケモン５</label>
            <div class="input-group">
                <input type="search" class="poke_input pokemon_input" id="pokemon5" name="pokemon5" autocomplete="off"
                    value="{{ closest_words[8] }}" oninput="changeColor('pokemon5')"
                    onfocus="showPokemonSuggestions('pokemon5')" onblur="myBlurFunction('pokemon5')">
                <div id="pokemon5suggestions" class="suggestions" style="display:none;"></div>
                <input type="search" class="tool_input item_input" id="item5" name="item5" autocomplete="off"
                    value="{{ closest_words[9] }}" oninput="changeColor('item5')">
                <input type="search" class="teras_input tera_input" class="teras_input tera_input" id="tera5"
                    name="tera5" autocomplete="off" value="{{ message5 }}">
            </div>

            <label for="pokemon6">ポケモン６</label>
            <div class="input-group">
                <input type="search" class="poke_input pokemon_input" id="pokemon6" name="pokemon6" autocomplete="off"
                    value="{{ closest_words[10] }}" oninput="changeColor('pokemon6')"
                    onfocus="showPokemonSuggestions('pokemon6')" onblur="myBlurFunction('pokemon6')">
                <div id="pokemon6suggestions" class="suggestions" style="display:none;"></div>
                <input type="search" class="tool_input item_input" id="item6" name="item6" autocomplete="off"
                    value="{{ closest_words[11] }}" oninput="changeColor('item6')">
                <input type="search" class="teras_input tera_input" id="tera6" name="tera6" autocomplete="off"
                    value="{{ message6 }}">
            </div>

            <input type="text" id="img_src" name="img_src" style="display: none;"
                value="data:image/jpeg;base64,{{ img_base64 }}">

            <input type="submit" id="post" value="構築を投稿する">

        </form>
    </div>
    <script src="{{ url_for('static', filename='js/script.js') }}"></script>
    <script src="{{ url_for('static', filename='js/form_change.js') }}"></script>
</body>

</html>