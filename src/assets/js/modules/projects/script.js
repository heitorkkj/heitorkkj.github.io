const area_Projects = document.getElementById('projects');
area_Projects.innerHTML = '';

projects.map((project, index)=>{
    area_Projects.innerHTML += `
        <article id=${index} class="project">

            <div class="project-details">
                <h1 class="title">${project.title}</h1>
                <h2 class="sub-title">${project.subTitle}</h2>
                <p class="content">${project.content}</p>
                <button class="btn-project">
                    <i class="bi bi-arrow-right"></i>
                    <a href=${project.link} target="_blank"> <BsArrowRight/> View</a>
                </button>
            </div>  

            <div class="project-image">
                <div class="moldura-image"></div>
                <img src="${project.img}"/>
            </div>
    </article>     
    `; 

    const currentProject = document.getElementById(index);
    currentProject.style.flexDirection = index%2 == 0 ? 'row' : 'row-reverse';

});
