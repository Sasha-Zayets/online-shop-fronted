import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.sass']
})
export class UploadImageComponent implements OnInit {
  @Output() onLoadFile: EventEmitter<File | null> = new EventEmitter();

  file: File | null = null;
  fileUrl: string | ArrayBuffer | null = null;
  constructor() { }

  ngOnInit(): void {
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
