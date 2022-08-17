const textarea = document.getElementById('textareaforelements');
var textarea1 = document.getElementById('textareaforelements');
const buttonforchanges = document.querySelector('.save-button');
buttonforchanges.addEventListener('click', (element) => {
   document.querySelector('.visibilityfortext').style.visibility = 'hidden';
   document.querySelector('.result').innerHTML = textarea.value;
   return false;
});
const editbutton = document.querySelector('.edit-button');
editbutton.addEventListener('click', (element) =>{
    document.querySelector('.visibilityfortext').style.visibility = 'visible';
    document.querySelector('.visibilityforstyle').style.visibility = 'hidden';
    document.querySelector('.Tbl-color').style.visibility = 'hidden';
    document.querySelector('.Tbl-background-color').style.visibility = 'hidden';
   
});
function onlyOne(radio) {
    var radios = document.getElementsByName('check')
    radios.forEach((item) => {
        if (item !== radio) item.checked = false
    })
};
function onlyOneone(checkbox) {
    var checkboxes = document.getElementsByName('checkbox')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
};
const clickstyle = document.querySelector('.style-button');
clickstyle.addEventListener('click', (element) => {
    document.querySelector('.visibilityfortext').style.visibility = 'hidden';
    document.querySelector('.visibilityforstyle').style.visibility = 'visible';
    document.querySelector('.Tbl-color').style.visibility = 'hidden';
    document.querySelector('.Tbl-background-color').style.visibility = 'hidden';
   
});
const twelvepx = document.querySelector('.twelve');
twelvepx.addEventListener('change', function() {
    if (this.checked) {
      document.querySelector('.result').style.fontSize = '12px';
    }});
    const fourteenpx = document.querySelector('.fourteen');
fourteenpx.addEventListener('change', function() {
    if (this.checked) {
      document.querySelector('.result').style.fontSize = '14px';
    }});
const sixteenpx = document.querySelector('.sixteen');
sixteenpx.addEventListener('change', function() {
    if (this.checked) {
     document.querySelector('.result').style.fontSize = '16px';
    }});
const eighteenpx = document.querySelector('.eighteen');
eighteenpx.addEventListener('change', function() {          
    if (this.checked) {
    document.querySelector('.result').style.fontSize = '18px';
    }});
    const twentypx = document.querySelector('.twenty');
twentypx.addEventListener('change', function() {
    if (this.checked) {
    document.querySelector('.result').style.fontSize = '20px';
     }});
var changeFontStyle = function (font) {
document.querySelector(".result").style.fontFamily = font.value;
};
function changeFont(color){
document.querySelector('.result').style.color = color; 
document.querySelector('.Tbl-color').style.visibility = 'hidden'; 
 };
var changeColor = document.querySelector('.ff');
changeColor.addEventListener('click', () =>{
    document.querySelector('.Tbl-color').style.visibility = 'visible';
    document.querySelector('.Tbl-background-color').style.visibility = 'hidden';
    document.querySelector('.edit').style.visibility = 'visble';

});
function changeBack(color){
    document.querySelector('.result').style.backgroundColor = color;  
    document.querySelector('.Tbl-background-color').style.visibility = 'hidden';
     };
var changeBackgroundcolor = document.querySelector('.fff');
changeBackgroundcolor.addEventListener('click', () =>{
         document.querySelector('.Tbl-background-color').style.visibility = 'visible';
         document.querySelector('.Tbl-color').style.visibility = 'hidden';
          
      });
const bold = document.querySelector('.Bold');
bold.addEventListener('change', function() {
 if (this.checked) {
     document.querySelector('.result').style.fontWeight = 'bold';
    }});
const normal = document.querySelector('.Normal');
normal.addEventListener('change', function() {
 if (this.checked) {
         document.querySelector('.result').style.fontWeight = 'normal';
        }});

const choosetablelist = document.querySelector('.chooseteblelist');
const addformbutton = document.querySelector('.add-button');
var a = addformbutton.addEventListener('click', () =>{
    document.querySelector('.edit').style.display = 'none';
    document.querySelector('.result').style.display = 'none';
    document.querySelector('.visibilityfortext').style.display = 'none';
    document.querySelector('.forbuttons').style.display = 'none';
   
    var maindivforchoice = document.createElement('div');
    maindivforchoice.classList.add('maindivforchoice');
    maindivforchoice.style.width = '800px';
    maindivforchoice.style.height = '300px';
    maindivforchoice.style.backgroundColor = 'gainsboro';
    maindivforchoice.style.borderRadius = '4px';
    maindivforchoice.style.display = 'block';
    maindivforchoice.style.marginLeft = 'auto';
    maindivforchoice.style.marginRight ='auto';
    maindivforchoice.style.marginTop = '30px';
    maindivforchoice.style.border ='1px solid grey';


    document.body.appendChild(maindivforchoice);

   
    var divforlisttablechoose = document.createElement('div');
    divforlisttablechoose.classList.add('chooseteblelist');
    divforlisttablechoose.style.marginLeft = '20px';
    divforlisttablechoose.style.marginTop =  '10px';
    maindivforchoice.appendChild(divforlisttablechoose);

    var createdlabel1 = document.createElement('label');
    createdlabel1.innerHTML = "Choose what you want:";
    createdlabel1.style.fontSize = '30px';
    divforlisttablechoose.appendChild(createdlabel1);
    var br1 = document.createElement("br");
    divforlisttablechoose.appendChild(br1);
    var tablecheckbox = document.createElement('input');
    // tablecheckbox.setAttribute("type", 'radio');
    tablecheckbox.style.marginTop = '10px';
    tablecheckbox.type ='radio';
    tablecheckbox.name = 'rrr';
    tablecheckbox.setAttribute("id", 'tableradio');
    divforlisttablechoose.appendChild(tablecheckbox);
    divforlisttablechoose.appendChild(document.createTextNode("Table"));
    var listcheckbox = document.createElement('input');
    listcheckbox.setAttribute("type", 'radio');
    listcheckbox.name = 'rrr';
    listcheckbox.style.marginLeft = '10px';
    divforlisttablechoose.appendChild(listcheckbox);
    divforlisttablechoose.appendChild(document.createTextNode("List"));
    // choosetablelist.style.visibility = 'visible';
    // document.querySelector('.visibilityfortext').style.visibility = 'hidden';
    var l = listcheckbox.addEventListener('click', function handleClick1() {
        if (listcheckbox.checked == true) {
          

            divforlisttablechoose.appendChild(document.createElement('br'));
            maindivforchoice.style.height = '300px';
            var labelforcountLI = document.createElement('label');
            labelforcountLI.innerHTML = 'Count Li:';
            var countLi = document.createElement('input');
            countLi.type = 'text';
            countLi.style.width = '630px';
            countLi.style.height = '30px';
            countLi.style.marginTop = '20px';
            countLi.style.marginLeft = '50px';;
            divforlisttablechoose.appendChild(labelforcountLI);
            countLi.setAttribute('placeholder', 'Count Li:');
            divforlisttablechoose.appendChild(countLi);

            divforlisttablechoose.appendChild(document.createElement('br'));
            var labelfortypeofmarks = document.createElement('label');
            labelfortypeofmarks.innerHTML = 'Type of marks:';
            divforlisttablechoose.appendChild(labelfortypeofmarks);
            var arrayfortypesofmarks =["circle","disc","square"];
            var selectlistfortypeofmarks = document.createElement('select');
            selectlistfortypeofmarks.style.marginLeft = '15px';
            selectlistfortypeofmarks.style.width = '638px';
            selectlistfortypeofmarks.style.height = '30px';
            selectlistfortypeofmarks.style.marginTop = '20px';
            divforlisttablechoose.appendChild(selectlistfortypeofmarks);
            for (var i = 0; i < arrayfortypesofmarks.length; i++) {
                var option = document.createElement("option");
                option.value = arrayfortypesofmarks[i];
                option.text = arrayfortypesofmarks[i];
                selectlistfortypeofmarks.appendChild(option);
            };

            var buttonforcreatinglist = document.createElement('button');
            buttonforcreatinglist.innerHTML = 'Create list';
            buttonforcreatinglist.style.backgroundColor = 'green';
            buttonforcreatinglist.style.color = 'white';
            buttonforcreatinglist.style.width = '100px';
            buttonforcreatinglist.style.height = '30px';
            buttonforcreatinglist.style.borderRadius = '4px';
            buttonforcreatinglist.style.borderColor = 'green';
            buttonforcreatinglist.style.marginTop = '20px';
            divforlisttablechoose.appendChild(document.createElement('br'));
            divforlisttablechoose.appendChild(buttonforcreatinglist);
            buttonforcreatinglist.addEventListener('click', ()=> {
            var ulcreate = document.createElement('ul');
            var numberofli = countLi.value;
            for(let i = 1; i <= numberofli; i++){
                var createdLI = document.createElement('li');
                createdLI.innerHTML =`Item ${i}`;
                ulcreate.appendChild(createdLI);
            }
            var listyle = selectlistfortypeofmarks.options[selectlistfortypeofmarks.selectedIndex].value;
            ulcreate.style.listStyleType = `${listyle}`;
            // document.querySelector('.result').appendChild(ulcreate);
            textarea1.value = ulcreate.outerHTML;
            document.querySelector('.edit').style.display = 'block';
            document.querySelector('.result').style.display = 'block';
            document.querySelector('.visibilityfortext').style.display = 'block';
            document.querySelector('.forbuttons').style.display = 'block';
            maindivforchoice.style.display = 'none';
           });

        } else if(listcheckbox.checked == false) {
            alert('unchecked');
        }

      });
      var t = tablecheckbox.addEventListener('click', function handleClick2() {
        if (tablecheckbox.checked == true) {
            maindivforchoice.style.height = '500px';
            document.createElement('br');
            var labelcountTR = document.createElement('label');
            var textCountTR = document.createTextNode('Count TR:');
            var countTR = document.createElement('input');
            countTR.style.width = '630px';
            countTR.style.height = '30px';
            countTR.style.marginTop = '30px';
            countTR.style.marginLeft = '50px';
            countTR.type = 'text';
            countTR.setAttribute('placeholder', 'Count TR');
            divforlisttablechoose.appendChild(document.createElement('br'));
            divforlisttablechoose.appendChild(labelcountTR);
            divforlisttablechoose.appendChild(textCountTR);
            divforlisttablechoose.appendChild(countTR);

            document.createElement('br');
            var labelcountTD = document.createElement('label');
            var textCountTD = document.createTextNode('Count TD:');
            var countTD = document.createElement('input');
            countTD.style.width = '630px';
            countTD.style.height = '30px';
            countTD.style.marginTop = '20px';
            countTD.style.marginLeft = '50px';
            countTD.type = 'text';
            countTD.setAttribute('placeholder', 'Count TD');
            divforlisttablechoose.appendChild(document.createElement('br'));
            divforlisttablechoose.appendChild(labelcountTD);
            divforlisttablechoose.appendChild(textCountTD);
            divforlisttablechoose.appendChild(countTD);
            
           var divforlabel = document.createElement('div');
           divforlabel.style.marginTop = '20px';
            var labeladdstyle = document.createElement('label');
            labeladdstyle.innerHTML = "Add style to your table:";
            labeladdstyle.style.fontSize = '20px';
            divforlisttablechoose.appendChild(divforlabel);
            divforlabel.appendChild(labeladdstyle);

            document.createElement('br');
            var labelWidthTD = document.createElement('label');
            var textWidthTD = document.createTextNode('Width of TD:');
            var widthTD = document.createElement('input');
            widthTD.style.width = '630px';
            widthTD.style.height = '30px';
            widthTD.style.marginLeft = '34px';
            widthTD.type = 'text';
            widthTD.setAttribute('placeholder', 'Width of TD:');
            divforlisttablechoose.appendChild(document.createElement('br'));
            divforlisttablechoose.appendChild(labelWidthTD);
            divforlisttablechoose.appendChild(textWidthTD);
            divforlisttablechoose.appendChild(widthTD);
            
            document.createElement('br');
            var labelHeightTD = document.createElement('label');
            var textHeightTD = document.createTextNode('Height of TD:');
            var heightTD = document.createElement('input');
            heightTD.style.width = '630px';
            heightTD.style.height = '30px';
            heightTD.style.marginLeft = '30px';
            heightTD.style.marginTop = '20px';
            heightTD.type = 'text';
            heightTD.setAttribute('placeholder', 'Height of TD:');
            divforlisttablechoose.appendChild(document.createElement('br'));
            divforlisttablechoose.appendChild(labelHeightTD);
            divforlisttablechoose.appendChild(textHeightTD);
            divforlisttablechoose.appendChild(heightTD);

            var widthofborderlabel = document.createElement('label');
            widthofborderlabel.innerHTML = 'Width of border:';
            var inputforborderwidth = document.createElement('input');
            inputforborderwidth.type = 'text';
            inputforborderwidth.style.width  = '100px';
            inputforborderwidth.style.height = '30px';
            inputforborderwidth.style.marginTop = '20px';
            inputforborderwidth.style.marginLeft = '20px';
            inputforborderwidth.setAttribute('placeholder', 'Width:');
            divforlisttablechoose.appendChild(widthofborderlabel);
            divforlisttablechoose.appendChild(inputforborderwidth);

            var typeofborderlabel = document.createElement('label');
            typeofborderlabel.innerHTML = 'Type of border:';
            typeofborderlabel.style.marginLeft = '30px';
            divforlisttablechoose.appendChild(typeofborderlabel);

            var arrayforborder = ["solid","dotted","dashed","double"];
            var selectListforborderwidth = document.createElement("select");
            selectListforborderwidth.style.marginLeft = '10px';
            selectListforborderwidth.style.width = '100px';
            selectListforborderwidth.style.height = '30px';
            
            divforlisttablechoose.appendChild(selectListforborderwidth);
            for (var i = 0; i < arrayforborder.length; i++) {
                var option = document.createElement("option");
                option.value = arrayforborder[i];
                option.text = arrayforborder[i];
                selectListforborderwidth.appendChild(option);
            };

            var typeofbordercolor = document.createElement('label');
            typeofbordercolor.innerHTML = 'Color of border:';
            typeofbordercolor.style.marginLeft = '30px';
            divforlisttablechoose.appendChild(typeofbordercolor);


            var arraycolorofborder = ["black","red","blue","green"];
            var selectlistforbordercolor = document.createElement('select');
            selectlistforbordercolor.style.marginLeft = '10px';
            selectlistforbordercolor.style.width = '100px';
            selectlistforbordercolor.style.height = '30px';
            divforlisttablechoose.appendChild(selectlistforbordercolor);
            for (var i = 0; i < arraycolorofborder.length; i++) {
                var option = document.createElement("option");
                option.value = arraycolorofborder[i];
                option.text = arraycolorofborder[i];
                selectlistforbordercolor.appendChild(option);
            };
           
           
            var buttonforcreatingtable = document.createElement('button');
            buttonforcreatingtable.innerHTML = 'Create table';
            buttonforcreatingtable.style.backgroundColor = 'green';
            buttonforcreatingtable.style.color = 'white';
            buttonforcreatingtable.style.width = '100px';
            buttonforcreatingtable.style.height = '30px';
            buttonforcreatingtable.style.borderRadius = '4px';
            buttonforcreatingtable.style.borderColor = 'green';
            buttonforcreatingtable.style.marginTop = '20px';
            buttonforcreatingtable.setAttribute('id', 'buttonforcreatingtable');
            divforlisttablechoose.appendChild(document.createElement('br'));
            divforlisttablechoose.appendChild(buttonforcreatingtable);


            var tbl;
            document.getElementById('buttonforcreatingtable').addEventListener('click', () =>{
                function tableCreate(row, col){
                    tbl = document.createElement('table');
                
                    var colorvalue = selectlistforbordercolor.options[selectlistforbordercolor.selectedIndex].value;
                    console.log(colorvalue);
                    var stylevalue = selectListforborderwidth.options[selectListforborderwidth.selectedIndex].value;
                    var borderwidth = inputforborderwidth.value;
                    var wi = widthTD.value;
                    var he = heightTD.value;
                    tbl.style.borderWidth = `${borderwidth}px`;
                    tbl.style.borderColor = `${colorvalue}`;
                    tbl.style.borderStyle = `${stylevalue}`;
                    tbl.cellSpacing = '0';
                    tbl.cellPadding = '0';
                    for(let i = 0; i < row; i++){
                        let tr = tbl.insertRow();
                        for(let j = 0; j < col; j++){
                                let td = tr.insertCell();
                                td.appendChild(document.createTextNode(`${i},${j}` ));
                                td.style.border = `${borderwidth}px ${colorvalue} ${stylevalue}`;
                                td.style.width = `${wi}px`;
                                td.style.height = `${he}px`;
                                td.cellSpacing = '0';
                                td.cellPadding = '0';
                            }     
                    }
                    textarea.value = tbl.outerHTML;
                    // document.querySelector('.result').appendChild(tbl);
                    return tbl;
                }
                var tr = countTR.value;
                var td = countTD.value;
                tableCreate(tr,td);
                document.querySelector('.edit').style.display = 'block';
                document.querySelector('.result').style.display = 'block';
                document.querySelector('.visibilityfortext').style.display = 'block';
                document.querySelector('.forbuttons').style.display = 'block';
                maindivforchoice.style.display = 'none';
               });
        } else if(tablecheckbox.checked == false) {
            alert('unchecked');
        }
      });
});
function onechoice(radio) {
    var radios = document.getElementsByName('rrr')
    radios.forEach((item) => {
        if (item !== radio) item.checked = false
    })
};      

