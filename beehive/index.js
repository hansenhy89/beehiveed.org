<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content ="width=device-width, initial-scale=1.0"/>
        
    
        <style>
            body{
            
                margin:0;
                background-color:#57595D;
            }
    
    
            #navbar{
                height:75px;
                width:100%;
                background-color:rgb(255, 255, 0);
                
            }
            #wrapper{
                display:flex;
            }
    
            #sidebar{
                height:100vh;
                width:20vw;
                background:black;
                display:inline-block;
                float:left;
                margin:0;
                transition: all 0.3s;
                overflow:auto;
                
            }
    
            #contents{
                height:100vh;
                width:80vw;
                background-color:white;
                display:inline-block;
                float:right;
            }
    
            button {
                height:50px;
                width:100%;
                border:none;
                font-size:24px;
                display:block;
                text-align:left;
            }
    
            button:hover {
                background-color:#DCDCDC;
            }
            
            ul{
                margin:0;
                padding:0;
            }
    
            li:hover {
                color:blue;
            }
    
            .list {
                height:35px;
                list-style:none;
                background-color:white;
                color:black;
                font-family:helvetica;
                font-size:18px;
                border-left:10px solid #808080;
                padding-left: 5px;
                padding-top:17.5px;
                display:block;
                cursor:pointer;
            }

            #navLi{
                height: 100%;
                font-family: Helvetica;
                float:left;
                list-style:none;
                padding:10px
                
            }
          
    
        </style>
    </head>
    
    <body>
    
    <div id="navbar">
        <ul>
            <li id="navLi">Textbooks</li>
            <li id="navLi">Video Lessons</li>
            <li id="navLi">Literature</li>
            <li id="navLi">Dictionary</li>
        </ul>
    </div>
    <div id="wrapper">
    <div id="sidebar">
        <button id="chapter 1" onclick="myFunction1()"  class="panel">Chapter 1: Nouns</button>
            <ul id="list">
            <li id="commonVSproper" class="list">Common vs Proper</li>
            <li id="informalGreetings" class="list"><a>Singular vs Plural</a></li>
            <li id="countriesAndNationalities" class="list"><a>Definite Article vs Indefinite Article</a></li>
            <li id="NumbersAndAge" class="list"><a>Countable vs Non-countable</a></li>
            <li id="toBeExercises" class="list"><a>Collective Nouns</a></li>
            <li id="toBeExercises" class="list"><a>Quantifiers</a></li>
            <li id="toBeExercises" class="list"><a>Possesives</a></li>
            <li id="toBeExercises" class="list"><a>Compound Nouns</a></li>
            <li id="toBeExercises" class="list"><a>"Verbing" Nouns</a></li>
        </ul>
    
        <button id="chapter 2" onclick="myFunction2()" class="panel">Chapter 2: Pronouns</button>
        <button id="chapter 3" onclick="myFunction3()" class="panel">Chapter 3: Adjectives</button>
        <button id="chapter 4" onclick="myFunction4()" class="panel">Chapter 4: Verbs</button>
    <ul id="list4">
        <li id="inf" class="list">Infinitives</li>
        <li id="informalGreetings" class="list">Gerunds</li>
        <li id="countriesAndNationalities" class="list">Auxiliary Verbs</li>
        <li id="NumbersAndAge" class="list">Tenses</li>
        <li id="toBeExercises" class="list"><a>Aspect</a></li>
        <li id="toBeExercises" class="list"><a>Mood</a></li>
        <li id="toBeExercises" class="list"><a>Conditionals</a></li>
        <li id="toBeExercises" class="list"><a>Voice</a></li>
        <li id="toBeExercises" class="list"><a>Action and Linking Verbs</a></li>
    </ul>
        <button id="chapter 5" onclick="myFunction5()" class="panel">Chapter 5: Adverbs</button>
        <button id="chapter 6" onclick="myFunction6()" class="panel">Chapter 6</button>
        <button id="chapter 7" onclick="myFunction7()" class="panel">Chapter 7</button>
        <button id="chapter 8" onclick="myFunction8()" class="panel">Chapter 8</button>
        <button id="chapter 9" onclick="myFunction9()" class="panel">Chapter 9</button>
        <button id="chapter 10" onclick="myFunction10()" class="panel">Chapter 10</button>
        <button id="chapter 11" onclick="myFunction11()" class="panel">Chapter 11</button>
        <button id="chapter 12" onclick="myFunction12()" class="panel">Chapter 12</button>
        <button id="chapter 13" onclick="myFunction13()" class="panel">Chapter 13</button>
        <button id="chapter 14" onclick="myFunction14()" class="panel">Chapter 14</button>
        <button id="chapter 15" onclick="myFunction15()" class="panel">Chapter 15</button>
        <button id="chapter 16" onclick="myFunction16()" class="panel">Chapter 16</button>
        <button id="chapter 17" onclick="myFunction17()" class="panel">Chapter 17</button>
        <button id="chapter 18" onclick="myFunction18()" class="panel">Chapter 18</button>
        <button id="chapter 19" onclick="myFunction19()" class="panel">Chapter 19</button>
        <button id="chapter 20" onclick="myFunction20()" class="panel">Chapter 20</button>
    </div>
    
    <div id="contents"></div>
    
    </div>

<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
<script>

	//slide menu down
	function myFunction1() {
		$('#list').slideToggle();
	}

    function myFunction2() {
		$('#list').slideToggle();
	}

    function myFunction3() {
		$('#list').slideToggle();
	}

    function myFunction4() {
		$('#list4').slideToggle();
	}

    function myFunction5() {
		$('#list').slideToggle();
	}

    function myFunction6() {
		$('#list').slideToggle();
	}

    function myFunction7() {
		$('#list').slideToggle();
	}

    function myFunction8() {
		$('#list').slideToggle();
	}

    function myFunction9() {
		$('#list').slideToggle();
	}

    function myFunction10() {
		$('#list').slideToggle();
	}

    function myFunction11() {
		$('#list').slideToggle();
	}

    function myFunction12() {
		$('#list').slideToggle();
	}

    function myFunction13() {
		$('#list').slideToggle();
	}

    function myFunction14() {
		$('#list').slideToggle();
	}

    function myFunction15() {
		$('#list').slideToggle();
	}

    function myFunction16() {
		$('#list').slideToggle();
	}

    function myFunction17() {
		$('#list').slideToggle();
	}

    function myFunction18() {
		$('#list').slideToggle();
	}

    function myFunction19() {
		$('#list').slideToggle();
	}

    function myFunction20() {
		$('#list').slideToggle();
	}

	//change div content

	$("#commonVSproper").click(function(){
		$("#contents").load('files/commonvproper.html');
	});

    $("#inf").click(function(){
		$("#contents").load('files/infinitives.html');
	});

</script>
</body>
</html>
