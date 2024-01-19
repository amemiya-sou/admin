<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>URLからタイトルを取得</title>
</head>
<body>

<?php
// URLがPOSTされたかどうかを確認
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // 入力されたURLを取得
    $url = $_POST['url'];

    // URLが有効かどうかを確認
    if (filter_var($url, FILTER_VALIDATE_URL)) {
        // URLのコンテンツを取得
        $content = file_get_contents($url);

        // タイトルタグ内のテキストを抽出
        preg_match('/<title>(.*?)<\/title>/', $content, $matches);
        $title = isset($matches[1]) ? $matches[1] : 'タイトルが見つかりません';

        // 抽出したタイトルを表示
        echo '<p>入力されたURLのタイトルは: ' . htmlspecialchars($title) . '</p>';
    } else {
        echo '<p>無効なURLです。</p>';
    }
}
?>

<!-- 入力フォーム -->
<form method="post" action="">
    <label for="url">URLを入力してください:</label>
    <input type="url" name="url" id="url" required>
    <button type="submit">タイトルを取得</button>
</form>

</body>
</html>
