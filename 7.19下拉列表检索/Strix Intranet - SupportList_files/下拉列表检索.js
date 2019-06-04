window.onload=function(){
//	var value=document.getElementById("jiansuo").children;
	var data = {
                        "data_list": [{
                            "id": "1",
                            "title": "Adam Long",
                            "Ne": "AL",
                            "mNe": "al",
                        }, {
                            "id": "2",
                            "title": "Blue Qiao",
                            "Ne": "BQ",
                            "mNe": "bq",
                        }, {
                            "id": "3",
                            "title": "Ian Simons",
                            "Ne": "IS",
                            "mNe": "is",
                        }, {
                            "id": "4",
                            "title": "Kolo Li",
                            "Ne": "KL",
                            "mNe": "kl",
                        }, {
                            "id": "5",
                            "title": "Patrick Wu",
                            "Ne": "PW",
                            "mNe": "pw",
                        }, {
                            "id": "6",
                            "title": "Raymond Liu",
                            "Ne": "RL",
                            "mNe": "rl",
                        }, {
                            "id": "7",
                            "title": "Reed Lu",
                            "Ne": "RL",
                            "mNe": "rl",
                        }, {
                            "id": "8",
                            "title": "Shaorong Mai",
                            "Ne": "SM",
                            "mNe": "sm",
                        }, {
                            "id": "9",
                            "title": "Weibin Yao",
                            "Ne": "WY",
                            "mNe": "wy",
                        }, {
                            "id": "10",
                            "title": "Wendy Wei",
                            "Ne": "WW",
                            "mNe": "ww",
                        }, {
                            "id": "11",
                            "title": "Zachary Morton",
                            "Ne": "ZM",
                            "mNe": "zm"
                        }]
                    }
	 			var search = document.getElementById('search');
                var list = document.getElementById('list');
                search.oninput = function(){
                    list.innerHTML = '';
                    var text = search.value;
                    var length = text.length;
                    
                    for(var i in data.data_list){
                        if(data.data_list[i].title.substring(0,length).indexOf(text) != -1
                            ||data.data_list[i].Ne.substring(0,length).indexOf(text) != -1
                            ||data.data_list[i].mNe.substring(0,length).indexOf(text) != -1
                        ){
                            list.innerHTML += '<li id="'+data.data_list[i].id+'">'+data.data_list[i].title+'</li>'
                        }
                    }
                }
            }

