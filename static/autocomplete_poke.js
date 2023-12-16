(function ($) {
    function cleanQuery(query) {
        var arr = [];
        $.each(query.split('&'), function (i, param) {
            if (param.split('=')[1]) { arr.push(param); }
        });
        return arr.join('&');
    }

    $.fn.cleanQuery = function () {
        this.on('submit', function (event) {
            event.preventDefault();

            var query = cleanQuery($(this).serialize());
            location.href = this.action + '?' + query;
        });

        return this;
    };
})(jQuery);

$(function () {
    var source = function () {
        return function (request, response) {
            var list = [];
            var list_bubun = [];
            var poke_kata = [
                "ヒトカゲ",
                "リザード",
                "リザードン",
                "アーボ",
                "アーボック",
                "ピカチュウ",
                "ライチュウ",
                "ライチュウ(アローラ)",
                "サンド",
                "サンド(アローラ)",
                "サンドパン",
                "サンドパン(アローラ)",
                "ピッピ",
                "ピクシー",
                "ロコン",
                "ロコン(アローラ)",
                "キュウコン",
                "キュウコン(アローラ)",
                "プリン",
                "プクリン",
                "コンパン",
                "モルフォン",
                "ディグダ",
                "ディグダ(アローラ)",
                "ダグトリオ",
                "ダグトリオ(アローラ)",
                "ニャース",
                "ニャース(アローラ)",
                "ニャース(ガラル)",
                "ペルシアン",
                "ペルシアン(アローラ)",
                "コダック",
                "ゴルダック",
                "マンキー",
                "オコリザル",
                "ガーディ",
                "ガーディ(ヒスイ)",
                "ウインディ",
                "ウインディ(ヒスイ)",
                "ニョロモ",
                "ニョロゾ",
                "ニョロボン",
                "マダツボミ",
                "ウツドン",
                "ウツボット",
                "イシツブテ",
                "イシツブテ(アローラ)",
                "ゴローン",
                "ゴローン(アローラ)",
                "ゴローニャ",
                "ゴローニャ(アローラ)",
                "ヤドン",
                "ヤドン(ガラル)",
                "ヤドラン",
                "ヤドラン(ガラル)",
                "コイル",
                "レアコイル",
                "ベトベター",
                "ベトベター(アローラ)",
                "ベトベトン",
                "ベトベトン(アローラ)",
                "シェルダー",
                "パルシェン",
                "ゴース",
                "ゴースト",
                "ゲンガー",
                "スリープ",
                "スリーパー",
                "ビリリダマ",
                "ビリリダマ(ヒスイ)",
                "マルマイン",
                "マルマイン(ヒスイ)",
                "ドガース",
                "マタドガス",
                "マタドガス(ガラル)",
                "ラッキー",
                "ストライク",
                "ケンタロス",
                "ケンタロス(パルデア単)",
                "ケンタロス(パルデア炎)",
                "ケンタロス(パルデア水)",
                "コイキング",
                "ギャラドス",
                "メタモン",
                "イーブイ",
                "シャワーズ",
                "サンダース",
                "ブースター",
                "カビゴン",
                "フリーザー",
                "フリーザー(ガラル)",
                "サンダー",
                "サンダー(ガラル)",
                "ファイヤー",
                "ファイヤー(ガラル)",
                "ミニリュウ",
                "ハクリュー",
                "カイリュー",
                "ミュウツー",
                "ミュウ",
                "ヒノアラシ",
                "マグマラシ",
                "バクフーン",
                "バクフーン(ヒスイ)",
                "オタチ",
                "オオタチ",
                "ホーホー",
                "ヨルノズク",
                "イトマル",
                "アリアドス",
                "ピチュー",
                "ピィ",
                "ププリン",
                "メリープ",
                "モココ",
                "デンリュウ",
                "マリル",
                "マリルリ",
                "ウソッキー",
                "ニョロトノ",
                "ハネッコ",
                "ポポッコ",
                "ワタッコ",
                "エイパム",
                "ヒマナッツ",
                "キマワリ",
                "ヤンヤンマ",
                "ウパー",
                "ウパー(パルデア)",
                "ヌオー",
                "エーフィ",
                "ブラッキー",
                "ヤミカラス",
                "ヤドキング",
                "ヤドキング(ガラル)",
                "ムウマ",
                "キリンリキ",
                "クヌギダマ",
                "フォレトス",
                "ノコッチ",
                "グライガー",
                "ハリーセン",
                "ハリーセン(ヒスイ)",
                "ハッサム",
                "ヘラクロス",
                "ニューラ",
                "ニューラ(ヒスイ)",
                "ヒメグマ",
                "リングマ",
                "マグマッグ",
                "マグカルゴ",
                "ウリムー",
                "イノムー",
                "デリバード",
                "デルビル",
                "ヘルガー",
                "ゴマゾウ",
                "ドンファン",
                "オドシシ",
                "ハピナス",
                "ヨーギラス",
                "サナギラス",
                "バンギラス",
                "ポチエナ",
                "グラエナ",
                "ハスボー",
                "ハスブレロ",
                "ルンパッパ",
                "タネボー",
                "コノハナ",
                "ダーテング",
                "キャモメ",
                "ペリッパー",
                "ラルトス",
                "キルリア",
                "サーナイト",
                "アメタマ",
                "アメモース",
                "キノココ",
                "キノガッサ",
                "ナマケロ",
                "ヤルキモノ",
                "ケッキング",
                "マクノシタ",
                "ハリテヤマ",
                "ルリリ",
                "ノズパス",
                "ヤミラミ",
                "アサナン",
                "チャーレム",
                "バルビート",
                "バルビート",
                "ゴクリン",
                "マルノーム",
                "ドンメル",
                "バクーダ",
                "コータス",
                "バネブー",
                "ブーピッグ",
                "サボネア",
                "ノクタス",
                "チルット",
                "チルタリス",
                "ザングース",
                "ハブネーク",
                "ドジョッチ",
                "ナマズン",
                "ヘイガニ",
                "シザリガー",
                "ヒンバス",
                "ミロカロス",
                "カゲボウズ",
                "ジュペッタ",
                "ヨマワル",
                "サマヨール",
                "トロピウス",
                "チリーン",
                "ユキワラシ",
                "オニゴーリ",
                "ラブカス",
                "タツベイ",
                "コモルー",
                "ボーマンダ",
                "カイオーガ",
                "グラードン",
                "レックウザ",
                "ジラーチ",
                "ナエトル",
                "ハヤシガメ",
                "ドダイトス",
                "ヒコザル",
                "モウカザル",
                "ゴウカザル",
                "ポッチャマ",
                "ポッタイシ",
                "エンペルト",
                "ムックル",
                "ムクバード",
                "ムクホーク",
                "コロボーシ",
                "コロトック",
                "コリンク",
                "ルクシオ",
                "レントラー",
                "ミツハニー",
                "ビークイン",
                "パチリス",
                "ブイゼル",
                "フローゼル",
                "カラナクシ",
                "トリトドン",
                "エテボース",
                "フワンテ",
                "フワライド",
                "ムウマージ",
                "ドンカラス",
                "リーシャン",
                "スカンプー",
                "スカタンク",
                "ドーミラー",
                "ドータクン",
                "ウソハチ",
                "ピンプク",
                "ミカルゲ",
                "フカマル",
                "ガバイト",
                "ガブリアス",
                "ゴンベ",
                "リオル",
                "ルカリオ",
                "ヒポポタス",
                "カバルドン",
                "グレッグル",
                "ドクロッグ",
                "ケイコウオ",
                "ネオラント",
                "ユキカブリ",
                "ユキノオー",
                "マニューラ",
                "ジバコイル",
                "メガヤンマ",
                "リーフィア",
                "グレイシア",
                "グライオン",
                "マンムー",
                "エルレイド",
                "ダイノーズ",
                "ヨノワール",
                "ユキメノコ",
                "ロトム",
                "ロトム(みず)",
                "ロトム(ほのお)",
                "ロトム(くさ)",
                "ロトム(ひこう)",
                "ロトム(こおり)",
                "ユクシー",
                "エムリット",
                "アグノム",
                "ディアルガ",
                "ディアルガ(オリジン)",
                "パルキア",
                "パルキア(オリジン)",
                "ヒードラン",
                "ギラティナ(アナザー)",
                "ギラティナ(オリジン)",
                "クレセリア",
                "フィオネ",
                "マナフィ",
                "ダークライ",
                "シェイミ(ランド)",
                "シェイミ(スカイ)",
                "アルセウス",
                "ミジュマル",
                "フタチマル",
                "ダイケンキ",
                "ダイケンキ(ヒスイ)",
                "ドッコラー",
                "ドテッコツ",
                "ローブシン",
                "クルミル",
                "クルマユ",
                "ハハコモリ",
                "チュリネ",
                "ドレディア",
                "ドレディア(ヒスイ)",
                "バスラオ",
                "メグロコ",
                "ワルビル",
                "ワルビアル",
                "ゾロア",
                "ゾロア(ヒスイ)",
                "ゾロアーク",
                "ゾロアーク(ヒスイ)",
                "ゴチム",
                "ゴチミル",
                "ゴチルゼル",
                "コアルヒー",
                "スワンナ",
                "シキジカ",
                "メブキジカ",
                "タマゲタケ",
                "モロバレル",
                "ママンボウ",
                "シビシラス",
                "シビビール",
                "シビルドン",
                "ヒトモシ",
                "ランプラー",
                "シャンデラ",
                "キバゴ",
                "オノンド",
                "オノノクス",
                "クマシュン",
                "ツンベアー",
                "フリージオ",
                "コジョフー",
                "コジョンド",
                "コマタナ",
                "キリキザン",
                "ワシボン",
                "ウォーグル",
                "ウォーグル(ヒスイ)",
                "バルチャイ",
                "バルジーナ",
                "モノズ",
                "ジヘッド",
                "サザンドラ",
                "メラルバ",
                "ウルガモス",
                "トルネロス(化身)",
                "トルネロス(霊獣)",
                "ボルトロス(化身)",
                "ボルトロス(霊獣)",
                "ランドロス(化身)",
                "ランドロス(霊獣)",
                "メロエッタ(ボイス)",
                "メロエッタ(ステップ)",
                "ハリマロン",
                "ハリボーグ",
                "ブリガロン",
                "フォッコ",
                "テールナー",
                "マフォクシー",
                "ケロマツ",
                "ゲコガシラ",
                "ゲッコウガ",
                "ヤヤコマ",
                "ヒノヤコマ",
                "ファイアロー",
                "コフキムシ",
                "コフーライ",
                "ビビヨン",
                "シシコ",
                "カエンジシ",
                "フラベベ",
                "フラエッテ",
                "フラージェス",
                "メェークル",
                "ゴーゴート",
                "クズモー",
                "ドラミドロ",
                "ウデッポウ",
                "ブロスター",
                "ニンフィア",
                "ルチャブル",
                "デデンネ",
                "メレシー",
                "ヌメラ",
                "ヌメイル",
                "ヌメイル(ヒスイ)",
                "ヌメルゴン",
                "ヌメルゴン(ヒスイ)",
                "クレッフィ",
                "ボクレー",
                "オーロット",
                "カチコール",
                "クレベース",
                "クレベース(ヒスイ)",
                "オンバット",
                "オンバーン",
                "ディアンシー",
                "フーパ(いましめ)",
                "フーパ(ときはな)",
                "ボルケニオン",
                "モクロー",
                "フクスロー",
                "ジュナイパー",
                "ジュナイパー(ヒスイ)",
                "ヤングース",
                "デカグース",
                "アゴジムシ",
                "デンヂムシ",
                "クワガノン",
                "マケンカニ",
                "ケケンカニ",
                "オドリドリ(めらめら)",
                "オドリドリ(ぱちぱち)",
                "オドリドリ(ふらふら)",
                "オドリドリ(まいまい)",
                "アブリー",
                "アブリボン",
                "イワンコ",
                "ルガルガン(まひる)",
                "ルガルガン(まよなか)",
                "ルガルガン(たそがれ)",
                "ヒドイデ",
                "ドヒドイデ",
                "ドロバンコ",
                "バンバドロ",
                "カリキリ",
                "ラランテス",
                "ヤトウモリ",
                "エンニュート",
                "アマカジ",
                "アママイコ",
                "アマージョ",
                "ヤレユータン",
                "ナゲツケサル",
                "スナバァ",
                "シロデスナ",
                "ネッコアラ",
                "ミミッキュ",
                "ハギギシリ",
                "ジャラコ",
                "ジャランゴ",
                "ジャラランガ",
                "マギアナ",
                "サルノリ",
                "バチンキー",
                "ゴリランダー",
                "ヒバニー",
                "ラビフット",
                "エースバーン",
                "メッソン",
                "ジメレオン",
                "インテレオン",
                "ホシガリス",
                "ヨクバリス",
                "ココガラ",
                "アオガラス",
                "アーマーガア",
                "カムカメ",
                "カジリガメ",
                "タンドン",
                "トロッゴン",
                "セキタンザン",
                "カジッチュ",
                "アップリュー",
                "タルップル",
                "スナヘビ",
                "サダイジャ",
                "ウッウ",
                "サシカマス",
                "カマスジョー",
                "エレズン",
                "ストリンダー(ハイ)",
                "ストリンダー(ロー)",
                "ヤバチャ",
                "ポットデス",
                "ミブリム",
                "テブリム",
                "ブリムオン",
                "ベロバー",
                "ギモー",
                "オーロンゲ",
                "ニャイキング",
                "タイレーツ",
                "バチンウニ",
                "ユキハミ",
                "モスノウ",
                "イシヘンジン",
                "コオリッポ",
                "イエッサン♂",
                "イエッサン♀",
                "モルペコ",
                "ゾウドウ",
                "ダイオウドウ",
                "ドラメシヤ",
                "ドロンチ",
                "ドラパルト",
                "ザシアン",
                "ザシアン(王)",
                "ザマゼンタ",
                "ザマゼンタ(王)",
                "ムゲンダイナ",
                "ダクマ",
                "ウーラオス(いちげき)",
                "ウーラオス(れんげき)",
                "ザルード",
                "レジエレキ",
                "レジドラゴ",
                "ブリザポス",
                "レイスポス",
                "バドレックス",
                "バドレックス(はくば)",
                "バドレックス(こくば)",
                "アヤシシ",
                "バサギリ",
                "ガチグマ",
                "ガチグマ(アカツキ)",
                "イダイトウ♂",
                "イダイトウ♀",
                "オオニューラ",
                "ハリーマン",
                "ラブトロス(化身)",
                "ラブトロス(霊獣)",
                "ニャオハ",
                "ニャローテ",
                "マスカーニャ",
                "ホゲータ",
                "アチゲータ",
                "ラウドボーン",
                "クワッス",
                "ウェルカモ",
                "ウェーニバル",
                "グルトン",
                "パフュートン♂",
                "パフュートン♀",
                "タマンチュラ",
                "ワナイダー",
                "マメバッタ",
                "エクスレッグ",
                "パモ",
                "パモット",
                "パーモット",
                "ワッカネズミ",
                "イッカネズミ",
                "パピモッチ",
                "バウッツェル",
                "ミニーブ",
                "オリーニョ",
                "オリーヴァ",
                "イキリンコ",
                "コジオ",
                "ジオヅム",
                "キョジオーン",
                "カルボウ",
                "グレンアルマ",
                "ソウブレイズ",
                "ズピカ",
                "ハラバリー",
                "カイデン",
                "タイカイデン",
                "オラチフ",
                "マフィティフ",
                "シルシュルー",
                "タギングル",
                "アノクサ",
                "アノホラグサ",
                "ノノクラゲ",
                "リククラゲ",
                "ガケガニ",
                "カプサイジ",
                "スコヴィラン",
                "シガロコ",
                "ベラカス",
                "ヒラヒナ",
                "クエスパトラ",
                "カヌチャン",
                "ナカヌチャン",
                "デカヌチャン",
                "ウミディグダ",
                "ウミトリオ",
                "オトシドリ",
                "ナミイルカ",
                "イルカマン",
                "ブロロン",
                "ブロロローム",
                "モトトカゲ",
                "ミミズズ",
                "キラーメ",
                "キラフロル",
                "ボチ",
                "ハカドッグ",
                "カラミンゴ",
                "アルクジラ",
                "ハルクジラ",
                "ミガルーサ",
                "ヘイラッシャ",
                "コノヨザル",
                "ドオー",
                "リキキリン",
                "ノココッチ",
                "ドドゲザン",
                "イダイナキバ",
                "サケブシッポ",
                "アラブルタケ",
                "ハバタクカミ",
                "チヲハウハネ",
                "スナノケガワ",
                "テツノワダチ",
                "テツノツツミ",
                "テツノカイナ",
                "テツノコウベ",
                "テツノドクガ",
                "テツノイバラ",
                "セビエ",
                "セゴール",
                "セグレイブ",
                "コレクレー(はこ)",
                "コレクレー(とほ)",
                "サーフゴー",
                "チオンジェン",
                "パオジアン",
                "ディンルー",
                "イーユイ",
                "トドロクツキ",
                "テツノブジン",
                "コライドン",
                "ミライドン",
                "ウネルミナモ",
                "テツノイサハ",
                "カミッチュ",
                "チャデス",
                "ヤバソチャ",
                "イイネイヌ",
                "マシマシラ",
                "キチキギス",
                "オーガポン",
                "オーガポン(いど)",
                "オーガポン(かまど)",
                "オーガポン(いしずえ)",
                "シャリタツ"
            ];
            var form = {'ウォッシュトロトム':'ロトム(みず)','ヒートロトム':'ロトム(ほのお)','カットロトム':'ロトム(くさ)','スピンロトム':'ロトム(ひこう)','フロストロトム':'ロトム(こおり)',};
            var term = hanToZen(hiraganaToKatakana(request.term.toUpperCase()));

            for (i = 0; i < poke_kata.length; i++) {
                //前方一致
                if (poke_kata[i].indexOf(term) == 0) {
                    list.push(poke_kata[i]);
                }
                //部分一致
                if (poke_kata[i].indexOf(term) > -1) {
                    list_bubun.push(poke_kata[i]);
                }
            }

            for (key in form) {
                //前方一致
                if (key.indexOf(term) == 0) {
                    list.push(form[key]);
                }
            }

            list = list.concat(list_bubun);
            list = list.filter(function (x, i, self) { return self.indexOf(x) === i; });

            // ここでクラスが"red-background"の場合は候補を非表示にする
            if ($(this.element).hasClass('red-background')) {
                list = [];
            }

            response(list.slice(0, 4));
        }
    }

    let autoCompleteTargetsPokemon = [$('#nav-searchbar-input'), $('#search-pokemon0'), $('#search-pokemon1'), $('#search-pokemon2'), $('#search-pokemon3'), $('#search-pokemon4'), $('#search-pokemon5'), $('#search-pokemon6'), $('#search-pokemon7'), $('#search-pokemon8'), $('#search-pokemon9'), $('#search-pokemon10'), $('#search-pokemon11'), $('#pokemon0'), $('#pokemon1'), $('#pokemon2'), $('#pokemon3'), $('#pokemon4'), $('#pokemon5'), $('#pokemon6'), $('#poke1'), $('#poke2'), $('#poke3')];

    for (i = 0; i < autoCompleteTargetsPokemon.length; i++) {
        autoCompleteTargetsPokemon[i].autocomplete({
            source: source(),
            autoFocus: true,
            delay: 100,
            select: function (event, ui) {
                // 選択されたときの処理
                var currentInput = $(this);
                var nextInput = currentInput.nextAll('input:first'); // 次のinput要素を取得

                if (nextInput.length > 0) {
                    nextInput.focus();
                } else {
                    // 次の項目がない場合、他の処理を行うか、フォーカスを移動しないようにする
                }
            }
        });
    }
});


function hiraganaToKatakana(src) {
    return src.replace(/[\u3041-\u3096]/g, function (match) {
        var chr = match.charCodeAt(0) + 0x60;
        return String.fromCharCode(chr);
    });
}

function hanToZen(src) {
    return src.replace(/[A-Za-z0-9:]/g, function (match) {
        var chr = match.charCodeAt(0) + 0xFEE0;
        return String.fromCharCode(chr);
    });
}

function tagControl(side, div) {
    if (side == 0) {
        if (div.style.left != '0px') {
            div.style.left = '0px';
        } else {
            div.style.left = '-180px';
        }
    } else {
        if (div.style.right != '0px') {
            div.style.right = '0px';
        } else {
            div.style.right = '-320px';
        }
    }
}