/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const preMap = {};
    for (let i = 0; i < numCourses; i++) {
        preMap[i] = [];
    }
    for (const [crs, pre] of prerequisites) {
        preMap[crs].push(pre);
    }

    const visitSet = new Set();

    const dfs = (crs) => {
        if (visitSet.has(crs)) return false;
        if (preMap[crs].length === 0) return true;

        visitSet.add(crs);
        for (const pre of preMap[crs]) {
            if (!dfs(pre)) return false;
        }
        visitSet.delete(crs);
        preMap[crs] = [];

        return true;
    };

    for (let crs = 0; crs < numCourses; crs++) {
        if (!dfs(crs)) return false;
    }

    return true;
};

