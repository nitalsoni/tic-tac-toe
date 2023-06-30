export type GameStatus = {
    state: GameProgress;
    winner: string | null;
};

export enum GameProgress {
    NotStarted,
    InPlay,
    Over,
    Unknown,
}

export default class Helper {
    static GetGameStatus(
        matrix: string[][],
        xo: string,
        row: number,
        column: number
    ): GameStatus {
        if (Helper.ScanMatrix(matrix)) {
            return { state: GameProgress.Over, winner: xo };
        } else {
            let blankCount = 0;
            matrix.forEach((x) => {
                if (x.indexOf("") >= 0) blankCount++;
            });

            if (blankCount > 0) {
                return { state: GameProgress.InPlay, winner: null };
            } else {
                return { state: GameProgress.Over, winner: "XO" };
            }
        }
    }

    static ScanMatrix(matrix: string[][]): boolean {
        //row and column scan
        for (let i = 0; i < matrix.length; i++) {
            let rowCount: number = 1;
            let colCount: number = 1;
            for (let j = 1; j < matrix.length; j++) {
                if (matrix[i][j] === matrix[i][j - 1] && matrix[i][j] !== "") {
                    rowCount++;
                }
                if (matrix[j][i] === matrix[j - 1][i] && matrix[j][i] !== "") {
                    colCount++;
                }
            }

            if (rowCount === matrix.length) {
                return true;
            }
            if (colCount === matrix.length) {
                return true;
            }
        }

        let leftRightCount = 1,
            rightToLeftCount = 1;
        for (
            let j = 0, k = matrix.length - 1;
            j < matrix.length - 1;
            j++, k--
        ) {
            if (matrix[j][j] === matrix[j + 1][j + 1] && matrix[j][j] !== "") {
                leftRightCount++;
            }

            if (matrix[j][k] === matrix[j + 1][k - 1] && matrix[j][k] !== "") {
                rightToLeftCount++;
            }
        }

        if (leftRightCount === matrix.length) {
            return true;
        }
        if (rightToLeftCount === matrix.length) {
            return true;
        }

        return false;
    }
}
