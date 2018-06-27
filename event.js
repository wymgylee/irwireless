window.IRWIRELESS = {
  DevConnect : function(nConnFlag) {
    if(nConnFlag == 1) {// 연결 됨. 페어링 대기.
    }else if(nConnFlag == 2){// 페어링 성공
  	} else if(nConnFlag == -1) {// 등록되지 않은 사용자
  	} else if(nConnFlag == -2) {// 이미 연결됨
    } else if(nConnFlag == -3) {// 상대방 연결 끊김!
    } else if(nConnFlag == -4) {// 중복 로그인
    } else if(nConnFlag == 0) {// 연결 끊김
    }

    alert("DevConnect, nConnFlag=" + nConnFlag);
  },

  DevHook : function(nHookFlag){
    if(nHookFlag == "1"){
  	}else if(nHookFlag == "3"){
  	}

    alert("DevHook, nHookFlag=" + nHookFlag);
  },

  // 수신 Ringing 상태에서 호출 됨.
  DevBell : function(nBell){
    if(nBell == "0"){
  	}else if(nBell == "1"){
  	}
    alert("DevBell, nBell=" + nBell);
  },

  DevCidData : function(szPhoneNum){
    alert("DevCidData, szPhoneNum=" + szPhoneNum);
  },

  DevVolume : function(volume){
  },

  DevMaxVolume : function(volume){
  },

  DevOutGoing : function(szPhoneNum){
    alert("DevOutGoing, szPhoneNum=" + szPhoneNum);
  },

  DevRecStartEnd : function(nFlag, szFileName){
      if(nFlag == "1"){
        // 녹취 시작
      }else if(nFlag == "0"){
        // 녹취 종료
    	}
      alert("DevRecStartEnd, nFlag=" + nFlag + ", szFileName=" + szFileName);
  },

  DevRecordFolder : function(path){
  },

  DevUploaded : function(nResult, localFileName, serverFileName){
  },

  DevCallState : function(nCallFlag){
  	if(nCallFlag == "0"){//대기중상태
  	}else if(nCallFlag == "1"){//통화중상태
  	}
    alert("DevCallState:" + nCallFlag);
  },

  DevCutRecord : function(filename) {
  },

  DevFileList : function(szFileList) {
  },

  DevCertState : function(state){
  },

  DevPhoneBook : function(szPBList){
  },

  DevSMS : function(szState){
  },

  DevCallStart : function(szCallInfo){
    alert("DevCallStart, szCallInfo=" + szCallInfo);
  },

  DevCallEnd : function(szCallInfo){
    alert("DevCallEnd, szCallInfo=" + szCallInfo);
  },

  DevSmsCount : function(szDate){
  },

  DevSavePath : function(nMode, szUrl, szPath, nSort){
  },

  DevRecordFileName : function(nResult, szFileName){
  },

  DevRecPartial : function(nStartEnd, szFileName, nResult){
  },

  DevBatteryInfo : function(level){
  }

}
