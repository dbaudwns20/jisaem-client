export default {
  setClassColumn() {
    return [
      {
        headerName: "클래스명",
        field: "name",
        width: 300
      },
      {
        headerName: "공개등수",
        field: "rate",
        width: 100
      },
      {
        headerName: "시작일",
        field: "startDate",
        width: 80
      },
      {
        headerName: "종료일",
        field: "endDate",
        width: 80
      },
      {
        headerName: "설명",
        field: "description",
        width: 200
      }
    ]
  }
}
