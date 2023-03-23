import {Component, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.sass']
})
export class UploadImageComponent implements OnInit, OnChanges {
  @Input() initialFileUrl: string | null | undefined = null;
  @Output() onLoadFile: EventEmitter<File | null> = new EventEmitter();

  file: File | null = null;
  fileUrl: string | ArrayBuffer | null = null;
  constructor() { }

  ngOnInit(): void {
    if (this.initialFileUrl) {
      this.fileUrl = this.initialFileUrl;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.initialFileUrl.currentValue) {
      this.fileUrl = changes.initialFileUrl.currentValue;
    }
  }

  @HostListener('change', ['$event.target.files'])
  onChangeFile(event: FileList): void {
    this.file = event && event.item(0);
    const reader = new FileReader();

    // @ts-ignore
    reader.readAsDataURL(this.file);
    reader.addEventListener('load', () => {
      this.fileUrl = reader.result;
      this.onLoadFile.emit(this.file);
    });
  }

  removeFile(): void {
    this.file = null;
    this.fileUrl = null;
    this.onLoadFile.emit(null);
  }
}
