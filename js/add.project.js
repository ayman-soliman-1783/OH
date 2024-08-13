let projectsGrid = document.querySelector("main .container .row");

let projects = {
    project1: {
        title: "Aire",
        imageUrl: "https://framerusercontent.com/images/kfr022WaJ8YJUyZFmdwCB3pXhs.jpg?scale-down-to=1024",
        hyperlink: "projects/aire.html",
        available: true,
    },
    project2: {
        title: "Correlated",
        imageUrl: "https://framerusercontent.com/images/QVKFKT3dyGxloXfzzpurVKNMM6M.jpg?scale-down-to=1024",
        hyperlink: "projects/correlated.html",
        available: true,
    },
    project3: {
        title: "Channel 5",
        imageUrl: "https://framerusercontent.com/images/AX9PukosNfGVcfXw3YapiYpl9g.jpg?scale-down-to=1024",
        hyperlink: "projects/channel-5.html",
        available: true,
    },
    project4: {
        title: "Ronald Abram",
        imageUrl: "https://framerusercontent.com/images/BAXywubxN8sAhfJg3AgGgFI.jpg?scale-down-to=1024",
        hyperlink: "projects/ronald-abram.html",
        available: true,
    },
    project5: {
        title: "Propeller",
        videoUrl: "https://framerusercontent.com/assets/XuzMZ3Z1QQHKltPqRjzGnsWs27M.mp4",
        hyperlink: "projects/propeller.html",
        available: true,
    },
    project6: {
        title: "Schuh",
        imageUrl: "https://framerusercontent.com/images/3WALBX7nnuG7p85CLjlVmWPDHw.jpg?scale-down-to=1024",
        hyperlink: "projects/schuh.html",
        available: true,
    },
    project7: {
        title: "Paperstreet",
        imageUrl: "https://framerusercontent.com/images/e3moUZXfgtjYQY4ILakIMaz4n7s.jpg?scale-down-to=2048",
        hyperlink: "projects/paperstreet.html",
        available: true,
    },
    project8: {
        title: "OH.SUPPLY",
        videoUrl: "https://framerusercontent.com/assets/SGjFvgcbK7s4yKh0xwuNjriMNII.mp4",
        hyperlink: "projects/oh-supply.html",
        available: true,
    },
    project9: {
        title: "Monokel Eyewear",
        imageUrl: "https://framerusercontent.com/images/aH1eUgCIIIrbJF7TUlaKAehoI.jpg?scale-down-to=1024",
        hyperlink: "projects/monokel-eyewear.html",
        available: true,
    },
    project10: {
        title: "Lawtrades",
        imageUrl: "https://framerusercontent.com/images/UbS7rWmAwWxjtwM7oaWwRuGo.jpg?scale-down-to=1024",
        hyperlink: "projects/lawtrades.html",
        available: false,
    },
    project11: {
        title: "Baselworld",
        imageUrl: "https://framerusercontent.com/images/hQVBeiDNGU2TfeDJALuhawlcto.jpg?scale-down-to=1024",
        hyperlink: "projects/baselworld.html",
        available: false,
    },
    project12: {
        title: "NYCB",
        videoUrl: "https://framerusercontent.com/assets/NieGBlxBdgpz9QCHV5Aj89rWjVg.mp4",
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
