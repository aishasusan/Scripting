var isl=[
{team:"atk",played:17,won:11,draw:3,los:3,pts:36},
{team:"mumbai",played:17,won:10,draw:4,los:3,pts:34},
{team:"hyderabad",played:18,won:6,draw:9,los:3,pts:37},
{team:"goa",played:18,won:6,draw:9,los:3,pts:27},
{team:"northeast",played:18,won:6,draw:9,los:3,pts:27},
{team:"jamshed",played:18,won:5,draw:6,los:7,pts:21},
{team:"bengluru",played:18,won:5,draw:7,los:6,pts:22}
];

team=isl.map(tem=>tem.team.toUpperCase()).forEach(tem=>console.log(tem))

isl.sort((t1,t2)=>t1.played>t2.played?-1:1).forEach(team=>console.log(team.team+","+team.played));

var high=isl.reduce((t1,t2)=>t1.pts>t2.pts?t1:t2);
console.log(high);

isl.filter(team=>team.pts>32?team["status"]="qualified":team["status"]="disqualified");
console.log(isl);