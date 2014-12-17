/**
 * Created by banhtieu on 12/12/14.
 */
class Piece {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

// chess board
class ChessBoard {
    pieces: Array<Piece>;

    ready() {
        this.pieces = [
            new Piece(1, 1),
            new Piece(10, 10)
        ]
    }

    pieceClicked() {
        this.pieces[0].x += 1;
    }
}