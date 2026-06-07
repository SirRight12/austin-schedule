let group = 'master'
const groups = {
    'master': ['Sanctuary','Large Group Opening', 'First Block', 'Second Block', 'Third Block', 'Fourth Block', 'Large Group Closing','Sanctuary'],
    'lime': ['Sanctuary','Large Group Opening','Snack/Missions','Games','Crafts','Small Group','Large Group Closing','Sanctuary'],
    'blue': ['Sanctuary','Large Group Opening','Snack/Missions','Games','Crafts','Small Group','Large Group Closing','Sanctuary'],
    'orange': ['Sanctuary','Large Group Opening','Snack/Missions','Games','Small Group','Crafts','Large Group Closing','Sanctuary'],
    'purple': ['Sanctuary','Large Group Opening','Snack/Missions','Games','Small Group','Crafts','Large Group Closing','Sanctuary'],
    'green': ['Sanctuary','Large Group Opening','Games','Crafts','Snack/Missions','Small Group','Large Group Closing','Sanctuary'],
    'red': ['Sanctuary','Large Group Opening','Games','Snack/Missions','Crafts','Small Group','Large Group Closing','Sanctuary'],
    'gray': ['Sanctuary','Large Group Opening','Crafts','Small Group','Snack/Missions','Games','Large Group Closing','Sanctuary'],
    'yellow': ['Sanctuary','Large Group Opening','Crafts','Snack/Missions','Small Group','Games','Large Group Closing','Sanctuary'],
    'navy': ['Sanctuary','Large Group Opening','Games','Crafts','Small Group','Snack/Missions','Large Group Closing','Sanctuary'],
    'teal': ['Sanctuary','Large Group Opening','Games','Crafts','Small Group','Snack/Missions','Large Group Closing','Sanctuary'],
    'black': ['Sanctuary','Large Group Opening','Small Group','Snack/Missions','Games','Crafts','Large Group Closing','Sanctuary'],
    'pink': ['Sanctuary','Large Group Opening','Small Group','Crafts','Games','Snack/Missions','Large Group Closing','Sanctuary'],
}
function changeGroup(groupName) {
    group = groupName;
    console.log(group);
}
function mapActivity(activityIdx) {
    const activity = groups[group][activityIdx];
    console.log(activity);
    if (!activity) {
        return "Unknown Activity";
    }
    return activity;
}