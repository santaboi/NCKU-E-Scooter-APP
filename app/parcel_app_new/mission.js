//init 0
var mission_status = 0
var missions = document.getElementById('mission_content_row');
var m_lists = document.getElementById('list_content_row');
var toasts = document.getElementsByClassName('toast')



function show_mis() {
    missions.style.display = 'block'
    m_lists.style.display = 'none'
    for (let i = 0; i < toasts.length; i++) {
        toasts[i].style.display = 'none'
    }

}

function show_list() {
    missions.style.display = 'none'
    m_lists.style.display = 'block'

    for (let i = 0; i < toasts.length ; i++){
        toasts[i].style.display = 'block'
    }
}