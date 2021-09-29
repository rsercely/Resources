
msgbox "Called from 03"
Browser("Advantage Shopping").Page("Advantage Shopping").Link("SpeakersCategoryTxt").Click
Browser("Advantage Shopping").Page("Advantage Shopping").Link("Link").Click
var_Value = Environment.Value("ActionName") 
MyReusableFunction("called from " & var_Value) 

