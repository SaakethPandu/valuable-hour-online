gdjs.LobbyCode = {};
gdjs.LobbyCode.localVariables = [];
gdjs.LobbyCode.GDLobbyButtonObjects1= [];
gdjs.LobbyCode.GDLobbyButtonObjects2= [];
gdjs.LobbyCode.GDInstructions_9595TextObjects1= [];
gdjs.LobbyCode.GDInstructions_9595TextObjects2= [];
gdjs.LobbyCode.GDStoneObjects1= [];
gdjs.LobbyCode.GDStoneObjects2= [];
gdjs.LobbyCode.GDGreenPlayer_9595MenuObjects1= [];
gdjs.LobbyCode.GDGreenPlayer_9595MenuObjects2= [];
gdjs.LobbyCode.GDRedPlayer_9595MenuObjects1= [];
gdjs.LobbyCode.GDRedPlayer_9595MenuObjects2= [];
gdjs.LobbyCode.GDTitleObjects1= [];
gdjs.LobbyCode.GDTitleObjects2= [];
gdjs.LobbyCode.GDNewTiledSpriteObjects1= [];
gdjs.LobbyCode.GDNewTiledSpriteObjects2= [];
gdjs.LobbyCode.GDStone2Objects1= [];
gdjs.LobbyCode.GDStone2Objects2= [];
gdjs.LobbyCode.GDPlayerObjects1= [];
gdjs.LobbyCode.GDPlayerObjects2= [];
gdjs.LobbyCode.GDLevelTilesObjects1= [];
gdjs.LobbyCode.GDLevelTilesObjects2= [];
gdjs.LobbyCode.GDJumpThroughObjects1= [];
gdjs.LobbyCode.GDJumpThroughObjects2= [];
gdjs.LobbyCode.GDArrowObjects1= [];
gdjs.LobbyCode.GDArrowObjects2= [];
gdjs.LobbyCode.GDBotObjects1= [];
gdjs.LobbyCode.GDBotObjects2= [];
gdjs.LobbyCode.GDArrowBarObjects1= [];
gdjs.LobbyCode.GDArrowBarObjects2= [];
gdjs.LobbyCode.GDP_9595to_9595pauseObjects1= [];
gdjs.LobbyCode.GDP_9595to_9595pauseObjects2= [];
gdjs.LobbyCode.GDScoreObjects1= [];
gdjs.LobbyCode.GDScoreObjects2= [];
gdjs.LobbyCode.GDPausedGameTextObjects1= [];
gdjs.LobbyCode.GDPausedGameTextObjects2= [];
gdjs.LobbyCode.GDAimingJoystickObjects1= [];
gdjs.LobbyCode.GDAimingJoystickObjects2= [];
gdjs.LobbyCode.GDMovementJoystickObjects1= [];
gdjs.LobbyCode.GDMovementJoystickObjects2= [];
gdjs.LobbyCode.GDScore2Objects1= [];
gdjs.LobbyCode.GDScore2Objects2= [];
gdjs.LobbyCode.GDHealthBarObjects1= [];
gdjs.LobbyCode.GDHealthBarObjects2= [];
gdjs.LobbyCode.GDLeaveGameButtonObjects1= [];
gdjs.LobbyCode.GDLeaveGameButtonObjects2= [];
gdjs.LobbyCode.GDCameraCenterObjects1= [];
gdjs.LobbyCode.GDCameraCenterObjects2= [];


gdjs.LobbyCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("1").setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("2").setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("3").setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("4").setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LobbyButton"), gdjs.LobbyCode.GDLobbyButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LobbyCode.GDLobbyButtonObjects1.length;i<l;++i) {
    if ( gdjs.LobbyCode.GDLobbyButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LobbyCode.GDLobbyButtonObjects1[k] = gdjs.LobbyCode.GDLobbyButtonObjects1[i];
        ++k;
    }
}
gdjs.LobbyCode.GDLobbyButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.multiplayer.isLobbiesWindowOpen(runtimeScene));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.playerAuthentication.isAuthenticated();
}
}
if (isConditionTrue_0) {
{gdjs.multiplayer.openLobbiesWindow(runtimeScene);
}{gdjs.playerAuthentication.openAuthenticationWindow(runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.multiplayer.hasLobbyGameJustStarted();
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Scene", false);
}}

}


};

gdjs.LobbyCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LobbyCode.GDLobbyButtonObjects1.length = 0;
gdjs.LobbyCode.GDLobbyButtonObjects2.length = 0;
gdjs.LobbyCode.GDInstructions_9595TextObjects1.length = 0;
gdjs.LobbyCode.GDInstructions_9595TextObjects2.length = 0;
gdjs.LobbyCode.GDStoneObjects1.length = 0;
gdjs.LobbyCode.GDStoneObjects2.length = 0;
gdjs.LobbyCode.GDGreenPlayer_9595MenuObjects1.length = 0;
gdjs.LobbyCode.GDGreenPlayer_9595MenuObjects2.length = 0;
gdjs.LobbyCode.GDRedPlayer_9595MenuObjects1.length = 0;
gdjs.LobbyCode.GDRedPlayer_9595MenuObjects2.length = 0;
gdjs.LobbyCode.GDTitleObjects1.length = 0;
gdjs.LobbyCode.GDTitleObjects2.length = 0;
gdjs.LobbyCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.LobbyCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.LobbyCode.GDStone2Objects1.length = 0;
gdjs.LobbyCode.GDStone2Objects2.length = 0;
gdjs.LobbyCode.GDPlayerObjects1.length = 0;
gdjs.LobbyCode.GDPlayerObjects2.length = 0;
gdjs.LobbyCode.GDLevelTilesObjects1.length = 0;
gdjs.LobbyCode.GDLevelTilesObjects2.length = 0;
gdjs.LobbyCode.GDJumpThroughObjects1.length = 0;
gdjs.LobbyCode.GDJumpThroughObjects2.length = 0;
gdjs.LobbyCode.GDArrowObjects1.length = 0;
gdjs.LobbyCode.GDArrowObjects2.length = 0;
gdjs.LobbyCode.GDBotObjects1.length = 0;
gdjs.LobbyCode.GDBotObjects2.length = 0;
gdjs.LobbyCode.GDArrowBarObjects1.length = 0;
gdjs.LobbyCode.GDArrowBarObjects2.length = 0;
gdjs.LobbyCode.GDP_9595to_9595pauseObjects1.length = 0;
gdjs.LobbyCode.GDP_9595to_9595pauseObjects2.length = 0;
gdjs.LobbyCode.GDScoreObjects1.length = 0;
gdjs.LobbyCode.GDScoreObjects2.length = 0;
gdjs.LobbyCode.GDPausedGameTextObjects1.length = 0;
gdjs.LobbyCode.GDPausedGameTextObjects2.length = 0;
gdjs.LobbyCode.GDAimingJoystickObjects1.length = 0;
gdjs.LobbyCode.GDAimingJoystickObjects2.length = 0;
gdjs.LobbyCode.GDMovementJoystickObjects1.length = 0;
gdjs.LobbyCode.GDMovementJoystickObjects2.length = 0;
gdjs.LobbyCode.GDScore2Objects1.length = 0;
gdjs.LobbyCode.GDScore2Objects2.length = 0;
gdjs.LobbyCode.GDHealthBarObjects1.length = 0;
gdjs.LobbyCode.GDHealthBarObjects2.length = 0;
gdjs.LobbyCode.GDLeaveGameButtonObjects1.length = 0;
gdjs.LobbyCode.GDLeaveGameButtonObjects2.length = 0;
gdjs.LobbyCode.GDCameraCenterObjects1.length = 0;
gdjs.LobbyCode.GDCameraCenterObjects2.length = 0;

gdjs.LobbyCode.eventsList0(runtimeScene);
gdjs.LobbyCode.GDLobbyButtonObjects1.length = 0;
gdjs.LobbyCode.GDLobbyButtonObjects2.length = 0;
gdjs.LobbyCode.GDInstructions_9595TextObjects1.length = 0;
gdjs.LobbyCode.GDInstructions_9595TextObjects2.length = 0;
gdjs.LobbyCode.GDStoneObjects1.length = 0;
gdjs.LobbyCode.GDStoneObjects2.length = 0;
gdjs.LobbyCode.GDGreenPlayer_9595MenuObjects1.length = 0;
gdjs.LobbyCode.GDGreenPlayer_9595MenuObjects2.length = 0;
gdjs.LobbyCode.GDRedPlayer_9595MenuObjects1.length = 0;
gdjs.LobbyCode.GDRedPlayer_9595MenuObjects2.length = 0;
gdjs.LobbyCode.GDTitleObjects1.length = 0;
gdjs.LobbyCode.GDTitleObjects2.length = 0;
gdjs.LobbyCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.LobbyCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.LobbyCode.GDStone2Objects1.length = 0;
gdjs.LobbyCode.GDStone2Objects2.length = 0;
gdjs.LobbyCode.GDPlayerObjects1.length = 0;
gdjs.LobbyCode.GDPlayerObjects2.length = 0;
gdjs.LobbyCode.GDLevelTilesObjects1.length = 0;
gdjs.LobbyCode.GDLevelTilesObjects2.length = 0;
gdjs.LobbyCode.GDJumpThroughObjects1.length = 0;
gdjs.LobbyCode.GDJumpThroughObjects2.length = 0;
gdjs.LobbyCode.GDArrowObjects1.length = 0;
gdjs.LobbyCode.GDArrowObjects2.length = 0;
gdjs.LobbyCode.GDBotObjects1.length = 0;
gdjs.LobbyCode.GDBotObjects2.length = 0;
gdjs.LobbyCode.GDArrowBarObjects1.length = 0;
gdjs.LobbyCode.GDArrowBarObjects2.length = 0;
gdjs.LobbyCode.GDP_9595to_9595pauseObjects1.length = 0;
gdjs.LobbyCode.GDP_9595to_9595pauseObjects2.length = 0;
gdjs.LobbyCode.GDScoreObjects1.length = 0;
gdjs.LobbyCode.GDScoreObjects2.length = 0;
gdjs.LobbyCode.GDPausedGameTextObjects1.length = 0;
gdjs.LobbyCode.GDPausedGameTextObjects2.length = 0;
gdjs.LobbyCode.GDAimingJoystickObjects1.length = 0;
gdjs.LobbyCode.GDAimingJoystickObjects2.length = 0;
gdjs.LobbyCode.GDMovementJoystickObjects1.length = 0;
gdjs.LobbyCode.GDMovementJoystickObjects2.length = 0;
gdjs.LobbyCode.GDScore2Objects1.length = 0;
gdjs.LobbyCode.GDScore2Objects2.length = 0;
gdjs.LobbyCode.GDHealthBarObjects1.length = 0;
gdjs.LobbyCode.GDHealthBarObjects2.length = 0;
gdjs.LobbyCode.GDLeaveGameButtonObjects1.length = 0;
gdjs.LobbyCode.GDLeaveGameButtonObjects2.length = 0;
gdjs.LobbyCode.GDCameraCenterObjects1.length = 0;
gdjs.LobbyCode.GDCameraCenterObjects2.length = 0;


return;

}

gdjs['LobbyCode'] = gdjs.LobbyCode;
