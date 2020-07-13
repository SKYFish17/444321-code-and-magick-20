'use strict';

(function () {
  var CLOUD_WIDTH = 420;
  var СLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var GAP = 10;
  var BAR_WIDTH = 40;
  var BAR_GAP = 50;
  var BAR_MAX_HEIGHT = 150;
  var TITLE_X = CLOUD_X + 2 * GAP;
  var TITLE_Y = CLOUD_Y + 2 * GAP;
  var TEXT_HEIGHT = 20;

  var renderCloud = function (ctx, x, y, cloudColor, strokeColor) {
    ctx.fillStyle = cloudColor;
    ctx.fillRect(x, y, CLOUD_WIDTH, СLOUD_HEIGHT);

    if (strokeColor) {
      ctx.strokeStyle = strokeColor;
      ctx.strokeRect(x, y, CLOUD_WIDTH, СLOUD_HEIGHT);
    }
  };

  var renderTitle = function (ctx, text, x, y) {
    ctx.fillStyle = '#000000';
    ctx.font = '16px PT Mono';
    ctx.textBaseline = 'hanging';
    ctx.fillText(text, x, y);
  };

  var renderPlayerName = function (ctx, playerName, index) {
    ctx.textBaseline = 'bottom';
    ctx.fillStyle = '#000000';
    ctx.fillText(playerName, CLOUD_X + 4 * GAP + (BAR_WIDTH + BAR_GAP) * index, CLOUD_Y + СLOUD_HEIGHT - GAP);
  };

  var renderPlayerBar = function (ctx, player, index, playerBarHeight) {
    var saturation = window.util.getRandomNumber(25, 100);
    ctx.fillStyle = 'hsl(234,' + saturation + '%' + ', 55%)';

    if (player === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }
    ctx.fillRect(CLOUD_X + 4 * GAP + (BAR_WIDTH + BAR_GAP) * index, CLOUD_Y + СLOUD_HEIGHT - 2 * GAP - playerBarHeight - 10, BAR_WIDTH, playerBarHeight);
  };

  var renderPlayerTime = function (ctx, time, index, playerBarHeight) {
    ctx.fillStyle = '#000000';
    ctx.fillText(Math.round(time), CLOUD_X + 4 * GAP + (BAR_WIDTH + BAR_GAP) * index, CLOUD_Y + СLOUD_HEIGHT - TEXT_HEIGHT - playerBarHeight - 2 * GAP);
  };

  window.renderStatistics = function (ctx, players, times) {
    var maxPlayersTime = window.util.getMaxElement(times);

    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#ffffff', 'rgba(0, 0, 0, 0.7)');

    renderTitle(ctx, 'Ура вы победили!', TITLE_X, TITLE_Y);
    renderTitle(ctx, 'Список результатов:', TITLE_X, TITLE_Y + TEXT_HEIGHT);

    for (var i = 0; i < players.length; i++) {
      var playerBarHeight = times[i] * BAR_MAX_HEIGHT / maxPlayersTime;

      renderPlayerName(ctx, players[i], i);
      renderPlayerBar(ctx, players[i], i, playerBarHeight);
      renderPlayerTime(ctx, times[i], i, playerBarHeight);
    }

  };

})();
