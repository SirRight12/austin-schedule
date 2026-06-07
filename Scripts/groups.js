let group = 'master'
const groups = {
    'master': ['Large Group Opening', 'First Block', 'Second Block', 'Third Block', 'Fourth Block', 'Large Group Closing'],
    'lime': [],
    'blue': [],
    'orange': [],
    'purple': [],
    'green': [],
    'red': [],
    'gray': [],
    'yellow': [],
    'navy': [],
    'teal': [],
    'black': [],
    'pink': [],
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