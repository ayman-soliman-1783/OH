let projectsGrid = document.querySelector("main .container .row");

let projects = {
    project1: {
        title: "Aire",
        imageUrl: "../assets/project/aire.avif",
        hyperlink: "projects/aire.html",
        available: true,
    },
    project2: {
        title: "Correlated",
        imageUrl: "../assets/project/correlated.avif",
        hyperlink: "projects/correlated.html",
        available: true,
    },
    project3: {
        title: "Channel 5",
        imageUrl: "../assets/project/channel-5.avif",
        hyperlink: "projects/channel-5.html",
        available: true,
    },
    project4: {
        title: "Ronald Abram",
        imageUrl: "../assets/project/ronald-abram.avif",
        hyperlink: "projects/ronald-abram.html",
        available: true,
    },
    project5: {
        title: "Propeller",
        videoUrl: "../assets/project/propeller.mp4",
        hyperlink: "projects/propeller.html",
        available: true,
    },
    project6: {
        title: "Schuh",
        imageUrl: "../assets/project/schuh.avif",
        hyperlink: "projects/schuh.html",
        available: true,
    },
    project7: {
        title: "Paperstreet",
        imageUrl: "../assets/project/paperstreet.avif",
        hyperlink: "projects/paperstreet.html",
        available: true,
    },
    project8: {
        title: "OH.SUPPLY",
        videoUrl: "../assets/project/oh-supply.mp4",
        hyperlink: "projects/oh-supply.html",
        available: true,
    },
    project9: {
        title: "Monokel Eyewear",
        imageUrl: "../assets/project/monokel-eyewear.avif",
        hyperlink: "projects/monokel-eyewear.html",
        available: true,
    },
    project10: {
        title: "Lawtrades",
        imageUrl: "../assets/project/lawtrades.avif",
        hyperlink: "projects/lawtrades.html",
        available: false,
    },
    project11: {
        title: "Baselworld",
        imageUrl: "../assets/project/baselworld.avif",
        hyperlink: "projects/baselworld.html",
        available: false,
    },
    project12: {
        title: "NYCB",
        videoUrl: "../assets/project/nycb.mp4",
        hyperlink: "projects/nycb.html",
        available: true,
    },
};

let addproject = function (project) {
    let item = document.createElement("div");
    item.classList.add("col-xs-12", "col-lg-6");

    let contents = document.createElement("div");
    contents.classList.add("project", "overflow-hidden", "rounded-3");
    
    let frame = document.createElement("div")
    frame.classList.add("frame", "overflow-hidden", "rounded-3");

    if (project.hasOwnProperty("imageUrl")) {
        let image = document.createElement("img");
        image.src = project.imageUrl;
        image.alt = project.title;
        image.style.scale = "1.1";
        frame.appendChild(image);
        contents.appendChild(frame);
    }
    else {
        let video = document.createElement("video");
        video.src = project.videoUrl;
        video.autoplay = true;
        video.loop = true;
        video.muted = true;
        video.controls = false;
        frame.appendChild(video);
        contents.appendChild(frame);
    }

    let texts = document.createElement("div");
    texts.classList.add("texts", "project-title");

    let title = document.createElement("p");
    title.textContent = project.title;

    if (project.available) {
        texts.appendChild(title);
        contents.appendChild(texts);

        let anchor = document.createElement("img");
        anchor.src = "assets/arrow.svg";
        anchor.alt = "View Project";
        anchor.classList.add("anchor");
        contents.appendChild(anchor);

        let link = document.createElement("a");
        link.href = project.hyperlink;
        link.appendChild(contents);

        item.appendChild(link);
    }
    
    else {
        let lock = document.createElement("img");
        lock.src = "assets/locked.svg";
        lock.alt = "Coming Soon";
        lock.classList.add("anchor");
        lock.style.backgroundColor = "black";

        let availablity = document.createElement("span");
        availablity.innerHTML = "Coming Soon";
        availablity.classList.add("text-secondary");

        texts.appendChild(title);
        texts.appendChild(availablity);
        
        contents.appendChild(texts);
        contents.classList.add("locked");

        contents.appendChild(lock);
        contents.style.cursor = "default";

        item.appendChild(contents);
    }

    projectsGrid.appendChild(item);
};

let projects_items = Object.keys(projects);

for (let i = 0; i < 12; i++) {
    addproject(projects[projects_items[i]]);
}
