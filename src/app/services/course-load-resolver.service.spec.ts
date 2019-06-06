import { TestBed, inject } from '@angular/core/testing';

import { CourseLoadResolverService } from './course-load-resolver.service';

describe('CourseLoadResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CourseLoadResolverService]
    });
  });

  it('should be created', inject([CourseLoadResolverService], (service: CourseLoadResolverService) => {
    expect(service).toBeTruthy();
  }));
});
