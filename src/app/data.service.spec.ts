import { TestBed, inject } from '@angular/core/testing';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DataService } from './data.service';


describe('DataService', () => {

  beforeEach(() => {
      TestBed.configureTestingModule({
          imports: [HttpClientTestingModule],
          providers: [DataService]
      });
  });

  it('should get users', inject(
      [HttpTestingController, DataService],
      (
        httpMock: HttpTestingController,
        dataService: DataService
      ) => {
        const mockUsers = [
            { name: 'Bob', website: 'www.test.com' },
            { name: 'Juliette', website: 'anOtherTest.com' }
        ];

        dataService.getData().subscribe((event: HttpEvent<any>) => {
            switch (event.type) {
                case HttpEventType.Response:
                    expect(event.body).toEqual(mockUsers);
            }
        });

        const mockReq = httpMock.expectOne(dataService.url); // asserts that one request was made to url

        expect(mockReq.cancelled).toBeFalsy(); // asserts that the request hasn't been cancelled
        expect(mockReq.request.responseType).toEqual('json'); // response of type JSON

        mockReq.flush(mockUsers); // completes the request 

        httpMock.verify(); // ensures that there are no other requests to be made
      }
    )
  );
})
