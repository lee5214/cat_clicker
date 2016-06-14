/**
 * Created by Administrator on 2016/6/12.
 */

var model = {
    currentCat : null,
    catList : [
    {   name : "sa",
        img : "img/cat1.jpg",
        clickCounter : 0
    },
    {   name : "dfg",
        img : "img/cat2.jpg",
        clickCounter : 0
    }]
};
/*********************************************************/
var controller = {
    init : function(){
        model.currentCat = model.catList[0];
        catView.init();
        catListView.init();
    },
    getCats : function(){
        return model.catList;
    },
    getCurrentCat : function(){
        return model.currentCat;
    },
    setCurrentCat : function(cat){
        model.currentCat = cat;
    },
    counterIncrease : function(){
        model.currentCat.clickCounter++;
        catView.render();
    }
};
/*********************************************************/
var catListView ={
    init : function(){
        var catList = model.catList;
        this.catListElem = document.getElementById("cat-list");
        this.render();
    },
    render : function(){
        var cats = controller.getCats();
        console.log(cats);
        for(var i=0;i<cats.length;i++){
            var cat = cats[i];
            var elem = document.createElement('button');
            elem.textContent = cat.name;

            elem.addEventListener("click", (function(catObj){
                return function(){
                    controller.setCurrentCat(catObj);
                    console.log("clicked: "+catObj.name);
                    catView.render();
                }
            })(cat));
            this.catListElem.appendChild(elem);
        }
    }
};
var catView ={
    init : function(){
        this.catElem = document.getElementById("cat");
        this.catName = document.getElementById("cat-name");
        this.catCounter = document.getElementById("cat-counter");
        this.catImg = document.getElementById("cat-img");
        this.catImg.addEventListener("click",function(){
           controller.counterIncrease();
        });
        this.render();

    },
    render : function(){
        var curCat = controller.getCurrentCat();
        this.catName.textContent = curCat.name;
        this.catCounter.textContent = curCat.clickCounter;
        this.catImg.src = curCat.img;

    },

};
controller.init();


/*
var container = $('#container');
var body = $('body');
var Cat = function(img){
    this.img = img;
    this.counter = 0;
    this.click=(function(numNew){
        return function(){
            console.log(numNew);
        }


    })(this.counter);

    elem.addEventListener('click', (function(numCopy) {
        return function() {
            alert(numCopy);
        };
    })(num));
};

(function run() {


    var catImgs = [
        'img/cat1.jpg',
        'img/cat2.jpg'
    ];
    var allCats=[];
    for(var i=0;i<2;i++) {
        allCats.push(new Cat(catImgs[i]));
        //console.log(allCats[i].img);
    }

    allCats.forEach(function(cat){

        //document.body.appendChild(elem);
        //console.log(elem);
        //<img src="img/cat1.jpg"></img>
        console.log(this.counter);
        body.append('<img src="'+cat.img+'">'+cat.counter+'</img>');

        //cat.click(function(e){
          //  cat.counter++;
        //})
    });



})();
    */