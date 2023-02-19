import { CalculatorService } from "./calculator.service"

describe('CalculatorService', ()=>{
  let mockLoggerService: any;
  let calculator: CalculatorService;

  beforeEach(()=>{
    mockLoggerService = jasmine.createSpyObj('LoggerService', ['log'])
    calculator = new CalculatorService(mockLoggerService);
  })


  it('should return sum of two numbers', ()=>{
    // const logger = new LoggerService()
    // spyOn(logger, 'log')
    let result = calculator.addition(5, 5);
    expect(result).toBe(10)
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1)
  })
  it('should return subtract of two numbers', ()=>{
    // const logger = new LoggerService()
    // spyOn(logger, 'log')
    let result = calculator.subtraction(9, 3);
    expect(result).toBe(6)
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1)
  })
})