from ninja import NinjaAPI
import tradingeconomics as te
te.login("e5f923b397b54d4:eelz4vl58tsr6u2")

api = NinjaAPI()

@api.get("/inflation")
def inflation(request):
    mydata = te.getCalendarData(category="inflation rate")
    return {"data": mydata}
  
@api.get("/unemployment")
def unemployment(request):
    mydata = te.getCalendarData(category="unemployment rate")
    return {"data": mydata}
  
  
  
@api.get("/pmi")
def pmi(request):
    mydata = te.getCalendarData(category="Manufacturing PMI")
    return {"data": mydata}
  
  
@api.get("/indicators")
def indicators(request):
    mydata = te.getIndicatorData()
    print(mydata)
    return {"data": mydata}