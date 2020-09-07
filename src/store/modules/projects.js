import freekick_cover from "../../assets/projects/covers/Freekick-VR.jpg";

const projects = {
    namespaced: true,
    state: {
        tags: [
            {
                id : 0,
                name : "GAMES"
            },
            {
                id : 1,
                name : "WEBSITES"
            }
        ],
        projects : [
            {
                id: 0,
                title: "Freekick VR",
                description: "Jeu couch coop alliant VR, kinect & smartphone",
                image: freekick_cover,
                tags : [0]
            },
             {
                id: 1,
                title: "Mon projet 2",
                description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
                image: "https://images.pexels.com/photos/237018/pexels-photo-237018.jpeg?cs=srgb&dl=asphalt-autumn-beauty-237018.jpg&fm=jpg",
                tags : [0]
            },
             {
                id: 2,
                title: "Mon projet 3",
                description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
                image: "https://cdnfr1.img.sputniknews.com/images/103272/22/1032722208.jpg",
                tags : [0]
            },
            {
                id: 3,
                title: "Mon projet 3",
                description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
                image: "https://cdnfr1.img.sputniknews.com/images/103272/22/1032722208.jpg",
                tags : [0]
            },
            {
                id: 4,
                title: "Mon projet 3",
                description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
                image: "https://cdnfr1.img.sputniknews.com/images/103272/22/1032722208.jpg",
                tags : [0,1]
            }
        ]
    },
    mutations: {},
    actions: {},
    getters: {
        getProjectTagsNamesByProjectId: (state) => (projectId) => {
            var project = state.projects.find(p => p.id === projectId);
            var tagsNames = [];

            project.tags.forEach(tagId => {
                const tag = state.tags.find(tag => tag.id === tagId);
                tagsNames.push(tag.name);
            });

            return tagsNames;
        },
        getProjectById: (state) => (projectId) => {
            var project = state.projects.find(p => p.id === projectId);
            return project;
        }
    }
}

export default projects;