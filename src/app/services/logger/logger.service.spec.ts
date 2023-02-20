import { LoggerService } from "./logger.service"

describe('LoggerService', ()=>{
    let loggerService: LoggerService;

    beforeEach(()=>{
        loggerService = new LoggerService()
    })

    it('should not have any messages initially', ()=>{
        let messagesCount = loggerService.messages.length;
        expect(messagesCount).toEqual(0);
    })

    it('should add message into messages on logging', ()=>{
        loggerService.log("Hello World!")
        
        expect(loggerService.messages.length).toEqual(1)
    })
    it('should clear all messages on clear', ()=>{
        loggerService.log("Hello Again!")
        loggerService.clear()
        expect(loggerService.messages.length).toEqual(0)
    })
})