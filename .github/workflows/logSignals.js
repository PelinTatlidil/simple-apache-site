// Check if the readiness probe path and port match the app routes and appPort

// Return a small object saying if the path matches, if the port matches, and a short note 

// Improve the note so another engineer understands if the probe is misconfigured


// Improve the note so another engineer understands if the probe is misconfigured

    // Compare app startup time vs first readiness failure

// Return an object with startedBeforeFirstProbe (true/false) and a short timingNote

// If the first failure happens before startup + initialDelaySeconds, say "probe too early"
function checkStartupTimeVsReadinessFailure(appStartupTime, firstReadinessFailureTime, initialDelaySeconds) {
    const startedBeforeFirstProbe = appStartupTime < firstReadinessFailureTime;
    let timingNote = '';
    if (startedBeforeFirstProbe) {
        timingNote = `The app started at ${appStartupTime} which is before the first readiness failure at ${firstReadinessFailureTime}. This suggests that the app was not ready when the probe first checked, which is expected if the startup time is longer than the probe's initial delay.`;
    } else {
        timingNote = `The app started at ${appStartupTime} which is after the first readiness failure at ${firstReadinessFailureTime}. This suggests that the app may have started but was not ready when the probe first checked, which could indicate a misconfiguration in the probe's initial delay or a longer startup time than expected.`;
    }
    return {
        startedBeforeFirstProbe,
        timingNote
    };  