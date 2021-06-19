module.exports = {
  "disableEmoji": false,
  "list": [
    "new file",
    "edit file",
    "add dir",
    "delete",
    "chore",
  ],
  "maxMessageLength": 64,
  "minMessageLength": 3,
  "questions": [
    "type",
    "subject",
    "body",
    "issues"
  ],
  "types": {
    "chore": {
      "description": "자잘한 작업",
      "emoji": "🤖",
      "value": "chore"
    },
    "edit file": {
      "description": "문서 수정",
      "emoji": "✏️",
      "value": "edit file"
    },
    "new file": {
      "description": "새로운 문서 추가",
      "emoji": "🍎",
      "value": "new file"
    },
    "add dir": {
      "description": "새로운 디렉토리 추가",
      "emoji": "🐛",
      "value": "add dir"
    },
    "delete": {
      "description": "파일 삭제",
      "emoji": "🍱",
      "value": "delete"
    },
    "release": {
      "description": "Create a release commit",
      "emoji": "🏹",
      "value": "release"
    },
    "style": {
      "description": "코드 의미에 영향을 주지 않는 변경사항 (포맷, 세미콜론 누락, 공백 등)",
      "emoji": "💄",
      "value": "style"
    },
    "test": {
      "description": "테스트 코드",
      "emoji": "🧃",
      "value": "test"
    },
    "build": {
      "description": "시스템 또는 외부 종속성에 영향을 미치는 변경사항 (npm, gulp, yarn 레벨)",
      "emoji": "🌴",
      "value": "build"
    }
  }
};
