# ①課題名
駄菓子屋ゲーセンアプリ

## ②課題内容（どんな作品か）
- 前回作成した駄菓子屋ゲーセンアプリをベースに、駄菓子屋のゲームセンターのようにメダルをベースに複数のゲームを楽しめるアプリ

## ③アプリのデプロイURL
https://taketo45.github.io/kadai01_janken/

## ④アプリのログイン用IDまたはPassword（ある場合）
- 不要

## ⑤工夫した点・こだわった点
- HTML/CSSで複数アプリ間を移動するため、サイドバーを利用してゲーム画面を切り替えるJavascriptを準備しました。
- それぞれのゲームで獲得したメダルをCookieを経由して使い回せるように実装しました。

## ⑥難しかった点・次回トライしたいこと（又は機能）
- HTML/CSSをツールで作成し、それをベースにCSSを吐き出すようなワークフローを構築しようとしたのだが、時間ばかりかかり完結しなかった。。
- サイドバーのリンクを利用して真ん中の画面を切り替えるようにしたが、このJavascript作成にかなり骨が折れ時間が溶けた。。
- あと１，２種類ゲームロジックを実装したかったが、時間が足りなかった。
- 前回作成したじゃんけんアプリをリファクタリングし、さらにその先でクラス化とファイル分割を行って複数ゲーム間でモジュールの使い回しを試みたが、じゃんけんアプリをクラスを利用したもので再現する過程で時間を消費しすぎて完結しなかった。クラスの理解をさらに深めてリベンジしたい。→ 05_ハイパーじゃんけん

## ⑦フリー項目（感想、シェアしたいこと等なんでも）
- [感想]
 ・リファクタリングは、新しい価値を産まない割に、時間が無限に溶けていく。お勉強と割り切ってやる分には問題ないが、期限がある課題でやるのは今後はやめておきたい。
 ・
- [参考記事]
  - 1. [Javascriptのclassを理解する](https://qiita.com/asameshiCode/items/4c710ae94242f8bbe890)
  - 2. 