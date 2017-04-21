export const getUsername = () => {
    return JSON.parse(localStorage.getItem('username'))
}

export const fetchAllProjects = () => {
    return fetch('/projects')
        .then((response) => response.json())
}

export const addMemberToProject = (projId) => {
    const data = {
        newMember: getUsername()
    }
   
    const requestOpts = {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }
    return fetch(`/projects/${projId}`, requestOpts)
        .then((response) => response.json())
}
