document.addEventListener("DOMContentLoaded", function() {

    var redArr = [];
    var blackArr = [];
    var pieceArr = [redArr, blackArr];
    var boardSize = 8;
    var lastClickedPiece = null;
    var redPlayer = "";
    var blackPlayer = "";

    (function loadGame() {
        createGrid();
        createHoldingSpace("red");
        createHoldingSpace("black");
        drawBoard();
        createPieces();
        addEventHandlers();
        setUpPlayers();


    })();

    function createGrid() {
        $theBoard = $(".board")[0];
        for (var i = 0; i < boardSize; i++) {
            var $thisRow = $("<row id='row-" + i + "' class='container'></row>");
            for (var j = 0; j < boardSize; j++) {
                var $thisFigure = $("<figure class='loc-" + i + "-" + j + "'></figure>");
                $($thisRow).append($thisFigure);
                var $thisDiv = $("<div class='loc-" + i + "-" + j + " space container'></div>");
                $($thisFigure).append($thisDiv);

            }
            $($theBoard).append($thisRow);

        }
    }

    function createHoldingSpace(color) {
        var $thisHoldingSpace = $("." + color + " .holding-space")[0];
        for (var i = 0; i < 12; i++) {
            var $thisPieceDiv = $("<div class='checkers-hell-" + i + " space container'></div>");
            var $sadFace = $("<img src='assets/images/sad-face.png'/>");
            $($sadFace).hide();
            $($thisPieceDiv).append($sadFace);
            $($thisPieceDiv).css("margin", "5px");
            $($thisHoldingSpace).append($thisPieceDiv);
        }
    }

    function drawBoard() {
        var $thisSpace = "";
        for (var i = 0; i < boardSize; i++) {
            for (var j = 0; j < boardSize; j++) {
                $thisSpace = "figure.loc-" + i + "-" + j;
                var valid = validForPiece(j, i);
                if (valid) {
                    $($thisSpace).css("background-color", "black");
                    var checkForPiece = isThereAPiece(j, i);
                    if (checkForPiece === false) {
                        var thisDiv = findLocation(j, i);
                        $(thisDiv).css("background-color", "black");
                        $(thisDiv).text("");
                    }
                } else {
                    $($thisSpace).css("background-color", "red");
                }

            }
        }
    }

    function drawDeadPieces(color) {
        var countOfDeadPieces = 0;
        var rightArr = [];
        var rightHoldingSpace = null;
        rightHoldingSpace = $("." + color + " .holding-space")[0];

        if(color === "red"){
          rightArr = redArr;
        }
        else if(color === "black"){
          rightArr = blackArr;
        }

        for (var i = 0; i < rightArr.length; i++) {
            var thisPiece = rightArr[i];
            if (thisPiece.alive === false) {
              var divToFill =  $(rightHoldingSpace).children()[countOfDeadPieces];
              $(divToFill).css("background-color", color);
              $($(divToFill).children()[0]).show();
                countOfDeadPieces += 1;
            }
        }
    }







    function validForPiece(x, y) {
        var valid = "";
        if ((y % 2) === 0) {
            if (x % 2 === 0) {
                valid = true;
            } else {
                valid = false;
            }

        } else {
            if (x % 2 === 1) {
                valid = true;
            } else {
                valid = false;
            }
        }
        return valid;
    }


    function createPieces() {

        for (var i = 0; i < boardSize; i++) {
            for (var j = 0; j < boardSize; j++) {
                if (i < 3 || i > 4) {
                    var thisPiece = {};
                    var valid = validForPiece(i, j);
                    if (valid) {
                        thisPiece = {
                            validMoves: {
                                NW: null,
                                NE: null,
                                SW: null,
                                SE: null
                            }
                        };
                        thisPiece.x = j;
                        thisPiece.y = i;
                        thisPiece.lastX = null;
                        thisPiece.lastY = null;
                        thisPiece.killCount = 0;
                        thisPiece.type = "pawn";
                        thisPiece.alive = true;

                        if (i < 4) {
                            thisPiece.color = "black";
                            blackArr.push(thisPiece);
                        } else {
                            thisPiece.color = "red";
                            redArr.push(thisPiece);
                        }
                    }
                    updatePieceUI(thisPiece);
                }

            }
        }
    }

    function checkForWin(piece) {
        if (piece.color === "black") {
            var redAlive = 0;
            for (var i = 0; i < redArr.length; i++) {
                var redPiece = redArr[i];
                if (redPiece.alive === true) {
                    redAlive += 1;
                }
            }
            if (redAlive === 0) {
                alert("Black wins!");
            }
        }
        if (piece.color === "red") {
            var blackAlive = 0;
            for (var j = 0; j < blackArr.length; j++) {
                var blackPiece = blackArr[j];
                if (blackPiece.alive === true) {
                    blackAlive += 1;
                }
            }
            if (blackAlive === 0) {
                alert("Red wins!");
            }

        }
    }


    function addEventHandlers() {
        for (var i = 0; i < boardSize; i++) {
            for (var j = 0; j < boardSize; j++) {
                thisDiv = findLocation(j, i);
                thisFigure = $(thisDiv).parent()[0];
                $(thisFigure).on("click", function(event) {
                    var location = event.currentTarget;
                    var x = findMyX(location);
                    var y = findMyY(location);
                    var thisPiece = null;
                    var canMove = false;
                    location = findLocation(x, y); //convert figure location to a usable div location for the pieces

                    thisPiece = isThereAPiece(x, y);
                    if (thisPiece) {
                        lastClickedPiece = thisPiece;
                        drawBoard();
                        checkValidMoves(thisPiece);
                        animateValidMoves(thisPiece);
                    }
                    if (canIMoveHere(lastClickedPiece, location)) {
                        thisPiece = updatePieceData(lastClickedPiece, location);
                        checkForKill(thisPiece);
                        drawBoard();
                        updatePieceUI(thisPiece);
                        checkForWin(thisPiece);
                    }
                });



            }
        }
    }

    function setUpPlayers() {
        alert("Welcome to Checkers!");
        redPlayer = prompt("Please enter the Red player's name.");
        blackPlayer = prompt("Please enter the Black player's name.");
        var $h2Red = $("aside.red h2")[0];
        $($h2Red).text(redPlayer);
        $($h2Red).css("color", "red");

        var $h2Black = $("aside.black h2")[0];
        $($h2Black).text(blackPlayer);
        $($h2Black).css("color", "black");



    }


    function canIMoveHere(piece, location) {
        var pieceMoves = piece.validMoves;
        var newSpace = false;
        for (var key in pieceMoves) {
            if (pieceMoves[key] === location) {
                newSpace = location;
            }
        }

        return newSpace;
    }

    function checkValidMoves(piece) {
        var startLocation = findLocation(piece);
        var x = findMyX(startLocation);
        var y = findMyY(startLocation);
        var type = piece.type;
        var color = piece.color;

        var nw = checkNW(x, y, type, color);
        var ne = checkNE(x, y, type, color);
        var sw = checkSW(x, y, type, color);
        var se = checkSE(x, y, type, color);

        if (nw) {
            piece.validMoves.NW = nw;
        } else {
            piece.validMoves.NW = null;
        }
        if (ne) {
            piece.validMoves.NE = ne;
        } else {
            piece.validMoves.NE = null;
        }
        if (sw) {
            piece.validMoves.SW = sw;
        } else {
            piece.validMoves.SW = null;
        }
        if (se) {
            piece.validMoves.SE = se;
        } else {
            piece.validMoves.SE = null;
        }

    }

    function animateValidMoves(piece) {
        animateValidSquare(piece.validMoves.NW);
        animateValidSquare(piece.validMoves.NE);
        animateValidSquare(piece.validMoves.SW);
        animateValidSquare(piece.validMoves.SE);
    }

    function animateValidSquare(location) {
        if (location) {
            $(location).parent().css("background-color", "grey");
            $(location).css("background-color", "grey");

        }

    }

    function checkNW(x, y, type, color) {
        var nwX = x - 1;
        var nwY = y + 1;
        var checkReturn = null;
        if ((nwX < 8) && (nwY < 8) && ((type === "king") || (color === "black"))) {
            var pieceInTheWay = isThereAPiece(nwX, nwY);
            if (pieceInTheWay === false) {
                checkReturn = findLocation(nwX, nwY);
            } else if (pieceInTheWay.color === color) {
                checkReturn = false;
            } else if (pieceInTheWay.color !== color) {
                if (isThereAPiece(nwX - 1, nwY + 1)) {
                    checkReturn = false;
                } else {
                    checkReturn = findLocation(nwX - 1, nwY + 1);
                }

            }
        } else {
            checkReturn = false;
        }
        return checkReturn;
    }

    function checkNE(x, y, type, color) {
        var neX = x + 1;
        var neY = y + 1;
        var checkReturn = null;
        if ((neX < 8) && (neY < 8) && ((type === "king") || (color === "black"))) {
            var pieceInTheWay = isThereAPiece(neX, neY);
            if (pieceInTheWay === false) {
                checkReturn = findLocation(neX, neY);
            } else if (pieceInTheWay.color === color) {
                checkReturn = false;
            } else if (pieceInTheWay.color !== color) {
                if (isThereAPiece(neX + 1, neY + 1)) {
                    checkReturn = false;
                } else {
                    checkReturn = findLocation(neX + 1, neY + 1);
                }
            }

        } else {
            checkReturn = false;
        }
        return checkReturn;

    }

    function checkSW(x, y, type, color) {
        var swX = x - 1;
        var swY = y - 1;
        var checkReturn = null;
        if ((swX < 8) && (swY < 8) && ((type === "king") || (color === "red"))) {
            var pieceInTheWay = isThereAPiece(swX, swY);
            if (pieceInTheWay === false) {
                checkReturn = findLocation(swX, swY);
            } else if (pieceInTheWay.color === color) {
                checkReturn = false;
            } else if (pieceInTheWay.color !== color) {
                if (isThereAPiece(swX - 1, swY - 1)) {
                    checkReturn = false;
                } else {
                    checkReturn = findLocation(swX - 1, swY - 1);
                }
            }

        } else {
            checkReturn = false;
        }
        return checkReturn;
    }

    function checkSE(x, y, type, color) {
        var seX = x + 1;
        var seY = y - 1;
        var checkReturn = null;
        if ((seX < 8) && (seY < 8) && ((type === "king") || (color === "red"))) {
            var pieceInTheWay = isThereAPiece(seX, seY);
            if (pieceInTheWay === false) {
                checkReturn = findLocation(seX, seY);
            } else if (pieceInTheWay.color === color) {
                checkReturn = false;
            } else if (pieceInTheWay.color !== color) {
                if (isThereAPiece(seX + 1, seY - 1)) {
                    checkReturn = false;
                } else {
                    checkReturn = findLocation(seX + 1, seY - 1);
                }
            }
        } else {
            checkReturn = false;
        }
        return checkReturn;
    }



    function updatePieceData(piece, newLocation) {
        // debugger;
        piece.lastX = piece.x;
        piece.lastY = piece.y;
        piece.x = findMyX(newLocation);
        piece.y = findMyY(newLocation);
        piece.validMoves.NW = null;
        piece.validMoves.NE = null;
        piece.validMoves.SW = null;
        piece.validMoves.SE = null;
        if (piece.color === "red") {
            if (piece.y === 0) {
                piece.type = "king";
                updatePieceUI(piece);
            }
        } else if (piece.color === "black") {
            if (piece.y === 7) {
                piece.type = "king";
                updatePieceUI(piece);
            }
        }
        return piece;

    }

    function isThereAPiece(x, y) {
        for (var topLevel = 0; topLevel < 2; topLevel++) {
            var thisColorArray = pieceArr[topLevel];
            for (var i = 0; i < thisColorArray.length; i++) {
                var thisPiece = thisColorArray[i];
                if ((thisPiece.x === x) && (thisPiece.y === y)) {
                    return thisPiece;

                }
            }
        }

        return false;
    }

    function findMyX(location) {
        var locationClass = location.className;
        var x = parseInt(locationClass[6]); //location class comes back in format loc-y-x
        return x;
    }

    function findMyY(location) {
        var locationClass = location.className;
        var y = parseInt(locationClass[4]); //location class comes back in format loc-y-x
        return y;
    }

    function findLocation() {
        var x = null;
        var y = null;
        //passing x and y explicitly
        if (arguments.length > 1) {
            x = arguments[0];
            y = arguments[1];
        }
        //passing a piece object
        else {
            x = arguments[0].x;
            y = arguments[0].y;
        }

        var $thisLocation = $("div.loc-" + y + "-" + x)[0];
        return $thisLocation;

    }



    function updatePieceUI(thisPiece) {
        var x = thisPiece.x;
        var y = thisPiece.y;
        var lastX = thisPiece.lastX;
        var lastY = thisPiece.lastY;
        var $testDraw = findLocation(x, y);
        if (thisPiece.alive === true) {
            $($testDraw).css("background-color", thisPiece.color);
            $($testDraw).css("border", "solid 1px white");
        } else {
            $testDraw = findLocation(lastX, lastY);
            $($testDraw).css("background-color", "black");
            $($testDraw).css("border", "solid 1px black");
        }
        if ((thisPiece.type === "king") || (thisPiece.killCount > 0)) {
            // debugger;

            $($testDraw).css("color", "white");
            $($testDraw).css("text-align", "center");
            $($testDraw).css("flex-direction", "column");
            $($testDraw).css("justify-content", "space-around");
            $($testDraw).text("");

            if (thisPiece.type === "king") {
                $($testDraw).text("**King**");
            }
            if (thisPiece.killCount > 0) {
                var currentText = $($testDraw).text();

                if (currentText.length === 8) {
                    currentText = $($testDraw).text(currentText + " Kills: " + thisPiece.killCount).text();
                } else {

                    $($testDraw).text("Kills: " + thisPiece.killCount);

                }

            }



        }
        if ((lastX !== null) && (lastY !== null)) {
            $testDraw = findLocation(lastX, lastY);
            $($testDraw).css("background-color", "black");
            $($testDraw).css("border", "none");
        }
    }

    function checkForKill(piece) {
        var absX = Math.abs(piece.x - piece.lastX);
        var absY = Math.abs(piece.y - piece.lastY);
        if ((absX + absY) > 2) {
            var killedX = ((piece.x - piece.lastX) / 2) + piece.lastX;
            var killedY = ((piece.y - piece.lastY) / 2) + piece.lastY;
            var killedPiece = isThereAPiece(killedX, killedY);
            piece.killCount += 1;
            killedPiece.alive = false;
            killedPiece.lastX = killedPiece.x;
            killedPiece.lastY = killedPiece.y;
            killedPiece.x = "checkersHell";
            killedPiece.y = "checkersHell";
            updatePieceUI(killedPiece);
            debugger;
            drawDeadPieces(killedPiece.color);
        }
    }

});
