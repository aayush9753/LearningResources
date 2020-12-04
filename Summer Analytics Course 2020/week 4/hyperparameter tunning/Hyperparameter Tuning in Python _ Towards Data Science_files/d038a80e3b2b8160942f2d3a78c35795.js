document.write('<link rel="stylesheet" href="https://github.githubassets.com/assets/gist-embed-31007ea0d3bd9f80540adfbc55afc7bd.css">')
document.write('<div id=\"gist94688884\" class=\"gist\">\n    <div class=\"gist-file\">\n      <div class=\"gist-data\">\n        <div class=\"js-gist-file-update-container js-task-list-container file-box\">\n  <div id=\"file-baseline_models-py\" class=\"file\">\n    \n\n  <div itemprop=\"text\" class=\"Box-body p-0 blob-wrapper data type-python \">\n      \n<table class=\"highlight tab-size js-file-line-container\" data-tab-size=\"8\" data-paste-markdown-skip>\n      <tr>\n        <td id=\"file-baseline_models-py-L1\" class=\"blob-num js-line-number\" data-line-number=\"1\"><\/td>\n        <td id=\"file-baseline_models-py-LC1\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-c># prepare for modeling<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-baseline_models-py-L2\" class=\"blob-num js-line-number\" data-line-number=\"2\"><\/td>\n        <td id=\"file-baseline_models-py-LC2\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-v>X_train<\/span> <span class=pl-c1>=<\/span> <span class=pl-s1>train<\/span>.<span class=pl-en>drop<\/span>([<span class=pl-s>&#39;id&#39;<\/span>, <span class=pl-s>&#39;target&#39;<\/span>], <span class=pl-s1>axis<\/span><span class=pl-c1>=<\/span><span class=pl-c1>1<\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-baseline_models-py-L3\" class=\"blob-num js-line-number\" data-line-number=\"3\"><\/td>\n        <td id=\"file-baseline_models-py-LC3\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-s1>y_train<\/span> <span class=pl-c1>=<\/span> <span class=pl-s1>train<\/span>[<span class=pl-s>&#39;target&#39;<\/span>]<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-baseline_models-py-L4\" class=\"blob-num js-line-number\" data-line-number=\"4\"><\/td>\n        <td id=\"file-baseline_models-py-LC4\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-baseline_models-py-L5\" class=\"blob-num js-line-number\" data-line-number=\"5\"><\/td>\n        <td id=\"file-baseline_models-py-LC5\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-v>X_test<\/span> <span class=pl-c1>=<\/span> <span class=pl-s1>test<\/span>.<span class=pl-en>drop<\/span>([<span class=pl-s>&#39;id&#39;<\/span>], <span class=pl-s1>axis<\/span><span class=pl-c1>=<\/span><span class=pl-c1>1<\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-baseline_models-py-L6\" class=\"blob-num js-line-number\" data-line-number=\"6\"><\/td>\n        <td id=\"file-baseline_models-py-LC6\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-baseline_models-py-L7\" class=\"blob-num js-line-number\" data-line-number=\"7\"><\/td>\n        <td id=\"file-baseline_models-py-LC7\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-c># scaling data<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-baseline_models-py-L8\" class=\"blob-num js-line-number\" data-line-number=\"8\"><\/td>\n        <td id=\"file-baseline_models-py-LC8\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-s1>scaler<\/span> <span class=pl-c1>=<\/span> <span class=pl-v>StandardScaler<\/span>()<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-baseline_models-py-L9\" class=\"blob-num js-line-number\" data-line-number=\"9\"><\/td>\n        <td id=\"file-baseline_models-py-LC9\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-v>X_train<\/span> <span class=pl-c1>=<\/span> <span class=pl-s1>scaler<\/span>.<span class=pl-en>fit_transform<\/span>(<span class=pl-v>X_train<\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-baseline_models-py-L10\" class=\"blob-num js-line-number\" data-line-number=\"10\"><\/td>\n        <td id=\"file-baseline_models-py-LC10\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-v>X_test<\/span> <span class=pl-c1>=<\/span> <span class=pl-s1>scaler<\/span>.<span class=pl-en>transform<\/span>(<span class=pl-v>X_test<\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-baseline_models-py-L11\" class=\"blob-num js-line-number\" data-line-number=\"11\"><\/td>\n        <td id=\"file-baseline_models-py-LC11\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-baseline_models-py-L12\" class=\"blob-num js-line-number\" data-line-number=\"12\"><\/td>\n        <td id=\"file-baseline_models-py-LC12\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-c># define models<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-baseline_models-py-L13\" class=\"blob-num js-line-number\" data-line-number=\"13\"><\/td>\n        <td id=\"file-baseline_models-py-LC13\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-s1>ridge<\/span> <span class=pl-c1>=<\/span> <span class=pl-s1>linear_model<\/span>.<span class=pl-v>Ridge<\/span>()<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-baseline_models-py-L14\" class=\"blob-num js-line-number\" data-line-number=\"14\"><\/td>\n        <td id=\"file-baseline_models-py-LC14\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-s1>lasso<\/span> <span class=pl-c1>=<\/span> <span class=pl-s1>linear_model<\/span>.<span class=pl-v>Lasso<\/span>()<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-baseline_models-py-L15\" class=\"blob-num js-line-number\" data-line-number=\"15\"><\/td>\n        <td id=\"file-baseline_models-py-LC15\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-s1>elastic<\/span> <span class=pl-c1>=<\/span> <span class=pl-s1>linear_model<\/span>.<span class=pl-v>ElasticNet<\/span>()<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-baseline_models-py-L16\" class=\"blob-num js-line-number\" data-line-number=\"16\"><\/td>\n        <td id=\"file-baseline_models-py-LC16\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-s1>lasso_lars<\/span> <span class=pl-c1>=<\/span> <span class=pl-s1>linear_model<\/span>.<span class=pl-v>LassoLars<\/span>()<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-baseline_models-py-L17\" class=\"blob-num js-line-number\" data-line-number=\"17\"><\/td>\n        <td id=\"file-baseline_models-py-LC17\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-s1>bayesian_ridge<\/span> <span class=pl-c1>=<\/span> <span class=pl-s1>linear_model<\/span>.<span class=pl-v>BayesianRidge<\/span>()<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-baseline_models-py-L18\" class=\"blob-num js-line-number\" data-line-number=\"18\"><\/td>\n        <td id=\"file-baseline_models-py-LC18\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-s1>logistic<\/span> <span class=pl-c1>=<\/span> <span class=pl-s1>linear_model<\/span>.<span class=pl-v>LogisticRegression<\/span>(<span class=pl-s1>solver<\/span><span class=pl-c1>=<\/span><span class=pl-s>&#39;liblinear&#39;<\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-baseline_models-py-L19\" class=\"blob-num js-line-number\" data-line-number=\"19\"><\/td>\n        <td id=\"file-baseline_models-py-LC19\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-s1>sgd<\/span> <span class=pl-c1>=<\/span> <span class=pl-s1>linear_model<\/span>.<span class=pl-v>SGDClassifier<\/span>()<\/td>\n      <\/tr>\n<\/table>\n\n\n  <\/div>\n\n  <\/div>\n<\/div>\n\n      <\/div>\n      <div class=\"gist-meta\">\n        <a href=\"https://gist.github.com/terrah27/d038a80e3b2b8160942f2d3a78c35795/raw/f5a91e55b29b0fc44eab0b8f6cae8bae41b4af2f/baseline_models.py\" style=\"float:right\">view raw<\/a>\n        <a href=\"https://gist.github.com/terrah27/d038a80e3b2b8160942f2d3a78c35795#file-baseline_models-py\">baseline_models.py<\/a>\n        hosted with &#10084; by <a href=\"https://github.com\">GitHub<\/a>\n      <\/div>\n    <\/div>\n<\/div>\n')
