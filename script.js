const Aceitar = document.querySelector("#Aceitar")
const Modal_Zap = document.querySelector("#Zap")
const Modal_Death = document.querySelector("#DeathModal")
const Modal_Tower = document.querySelector("#TowerModal")
const Modal_Judgement = document.querySelector("#JudgementModal")
const DeathOk = document.querySelector("#DeathOk")
const TowerOk = document.querySelector("#TowerOk")
const JudgementOk = document.querySelector("#JudgementOk")

const Death = document.querySelector("#Death")
const Tower = document.querySelector("#Tower")
const Judgement = document.querySelector("#Judgement")


Aceitar.onclick = function () {
    Modal_Zap.showModal()
}


Death.onclick = function (){
    Modal_Death.showModal()
}
Tower.onclick = function (){
    Modal_Tower.showModal()
}
Judgement.onclick = function (){
    Modal_Judgement.showModal()
}

DeathOk.onclick = function(){
    Modal_Death.close()
}
TowerOk.onclick = function(){
    Modal_Tower.close()
}
JudgementOk.onclick = function(){
    Modal_Judgement.close()
}