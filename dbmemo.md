# Problems 4 Me で使用するVuex Stateについて

## Problems系
- problemsData
- problemsDict
- problemsIsLoading

## Submissions系
- submissionsData
- submissionsIsLoading
- submissionsDetail
- ratedSubmissionsData
- viewSubmissionsData

## その他
- errored
- ratedGraphData
- statusGraphData
- heatMapData
- userName
- selectedDate
- searchTags
- isDarkMode
- isLoaded
- rivalsList

# 画面一覧+Componentsについて
- Problems
  - ProblemsTable
    - searchTags
      - 点数一覧を配列として持っている
      - SearchCardでの取得結果
    - problemsList
      - problem listにACとWAのカウントをつける
      - urlも
  - SearchCard
    - searchTagsをもっている
    - scoresList
      - 得点一覧
  - StatusCard
    - ProblemsTableのFilter結果が必要
- Submissions
  - SubmissionsTable
    - submissionsData
      - DateをKeyとしたSubmissions
      - URLの計算もほしい   
  - StatisticsCard
    - その日のAC,Submissions,RatedPointSum
    - DateをKeyとして保持しよう
  - DatePickerCard
    - arrayEvents
      - submissionがあった日をListに追加
- UserInfo
  - VWidget
    - ratedSubmissionsData
    - ratedGraphData(submissionを計算してから)
  - EChart
  - HeatMap
- Rivals
  - RivalsInputDialog
