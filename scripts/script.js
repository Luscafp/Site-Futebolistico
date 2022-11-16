
       var app = new Vue({
            el: "#app",
            data: {
                league:{},
                standings: null,
            },
        
            methods:{
                // fetch das ligas
                fetchLeague() {
                    console.log("Working catchLeague")
                    fetch("https://api-football-standings.azharimm.dev/leagues")
                    .then (r => r.json()) 
                    .then (r => {
                        console.log(r)
                        this.league = r.data
                    })
                },
                
                // fetch das classificações
                fetchStandings() {
                        console.log("working CatchStanding")
                        fetch("https://api-football-standings.azharimm.dev/leagues/eng.1/standings?season=2020&sort=asc")
                            .then(r => r.json())
                            .then(r => {
                                console.log(r.data)
                                this.standings = r.data
                            })
                    },
            }
        })