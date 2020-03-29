adb connect 192.168.0.105
adb reverse tcp:8081 tcp:8081
adb connect 192.168.0.105
react-native start
react-native run-android