/**
 * Created by banhtieu on 12/12/14.
 */
var Piece = (function () {
    function Piece(x, y) {
        this.x = x;
        this.y = y;
    }
    return Piece;
})();
// chess board
var ChessBoard = (function () {
    function ChessBoard() {
    }
    ChessBoard.prototype.ready = function () {
        this.pieces = [
            new Piece(1, 1),
            new Piece(10, 10)
        ];
    };
    ChessBoard.prototype.pieceClicked = function () {
        this.pieces[0].x += 1;
    };
    return ChessBoard;
})();
